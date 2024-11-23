"use client";

import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import React from "react";

import { validateEmail } from "@/utils/validationEmail";
import { useSearchParams } from "next/navigation";
import { useSignUpMutation } from "@/store/queries/auth";
import webStorageClient from "@/utils/webStorageClient";
import { useRouter } from "next-nprogress-bar";

type Form = {
    name: string,
    email: string;
    password: string;
};
const initialForm: Form = {
    name: "",
    email: "",
    password: "",
};

function SignInModule() {
    const [isVisible, setIsVisible] = React.useState(false);
    const [form, setForm] = React.useState<Form>(initialForm);
    const [isSubmit, setSubmit] = React.useState(false);
    const params = useSearchParams();
    const router = useRouter();
    const redirect = params.get("redirect") ?? "/";

    const [signUp, { isLoading }] = useSignUpMutation();
    const handleForm = (value: unknown, key: string) => {
        setForm({ ...form, [key]: value });
    };

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmit(true);
        try {
            const data = await signUp(form).unwrap();
            if (data) {
                webStorageClient.setToken(data?.token);
                router.push(redirect);
            }
        } catch { }
    };

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <div className="flex w-full items-center justify-center py-20">
            <div className="flex w-full max-w-sm  backdrop-blur-lg rounded-2xl flex-col items-center gap-4 p-4">
                <div className="w-full">
                    <p className="pb-2 text-xl text-foreground font-bold">Đăng Ký</p>
                    <p className="text-small text-white/65 ">
                        Vui lòng đăng Ký để tiếp tục
                    </p>
                </div>
                <form className="flex w-full flex-col gap-3" onSubmit={submitForm}>
                    <Input
                        isRequired
                        errorMessage="Mời nhập tên đúng"
                        id="name"
                        isInvalid={!validateEmail(form.email) && isSubmit}
                        label="Họ và Tên"
                        name="name"
                        placeholder="Nhập tên của bạn"
                        type="text"
                        value={form.name}
                        variant="underlined"
                        onChange={({ target }) => {
                            handleForm(target.value, target.id);
                        }}
                    />
                    <Input
                        isRequired
                        errorMessage="Mời nhập email đúng"
                        id="email"
                        isInvalid={!validateEmail(form.email) && isSubmit}
                        label="Tài khoản email"
                        name="email"
                        placeholder="Nhập email của bạn"
                        type="email"
                        value={form.email}
                        variant="underlined"
                        onChange={({ target }) => {
                            handleForm(target.value, target.id);
                        }}
                    />
                    <Input
                        isRequired
                        endContent={
                            <button type="button" onClick={toggleVisibility}>
                                {isVisible ? (
                                    <Icon
                                        className="pointer-events-none text-2xl text-default-400"
                                        icon="solar:eye-closed-linear"
                                    />
                                ) : (
                                    <Icon
                                        className="pointer-events-none text-2xl text-default-400"
                                        icon="solar:eye-bold"
                                    />
                                )}
                            </button>
                        }
                        name="password"
                        errorMessage="Please enter a password"
                        id="password"
                        isInvalid={form.password === "" && isSubmit}
                        label="Mật khẩu"
                        placeholder="Nhập mật khẩu của bạn"
                        type={isVisible ? "text" : "password"}
                        value={form.password}
                        variant="underlined"
                        onChange={({ target }) => {
                            handleForm(target.value, target.id);
                        }}
                    />
                    <Button isLoading={isLoading} isDisabled={!form.email || !form.password} type="submit">
                        Đăng Ký
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default SignInModule;
