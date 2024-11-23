"use client";

import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/button";
import { Checkbox, Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

import { validateEmail } from "@/utils/validationEmail";
import { useSearchParams } from "next/navigation";
import { useSignInMutation } from "@/store/queries/auth";
import webStorageClient from "@/utils/webStorageClient";
import { useRouter } from "next-nprogress-bar";

type Form = {
    email: string;
    password: string;
};
const initialForm: Form = {
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
    const [signIn, { isLoading }] = useSignInMutation();
    const handleForm = (value: unknown, key: string) => {
        setForm({ ...form, [key]: value });
    };


    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmit(true);
        try {
            const data = await signIn(form).unwrap();
            if (data) {
                webStorageClient.setToken(data?.token);
                setTimeout(() => {
                    router.push(redirect);
                }, 500)
            }
        } catch { }
    };




    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <div className="flex w-full items-center justify-center py-20">
            <div className="flex w-full max-w-sm  backdrop-blur-lg rounded-2xl flex-col items-center gap-4 p-4">
                <div className="w-full">
                    <p className="pb-2 text-xl text-foreground font-bold">Đăng nhập</p>
                    <p className="text-small text-white/65 ">
                        Vui lòng đăng nhập để tiếp tục
                    </p>
                </div>
                <form className="flex w-full flex-col gap-3" onSubmit={submitForm}>
                    <Input
                        className="font-medium"
                        isRequired
                        color="primary"
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
                        className="font-medium"
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
                        color="primary"
                        onChange={({ target }) => {
                            handleForm(target.value, target.id);
                        }}
                    />
                    <div className="flex items-center text-white justify-between px-1 py-2">
                        <Checkbox name="remember" color="primary" size="sm">
                            Nhớ mật khẩu
                        </Checkbox>
                        <Link className="text-foreground/50" href="#">
                            Quên mật khẩu?
                        </Link>
                    </div>
                    <Button color="primary" className="font-semibold" isLoading={isLoading} isDisabled={!form.email || !form.password} type="submit">
                        Đăng nhập
                    </Button>
                </form>

                <p className="text-center text-small text-white">
                    Chưa có tài khoản? &nbsp;
                    <Link href={`/sign-up?redirect=${redirect}`} className="underline-offset-2">Đăng ký</Link>
                </p>
            </div>
        </div>
    );
}

export default SignInModule;
