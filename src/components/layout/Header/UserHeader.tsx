'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react"
import webStorageClient from '@/utils/webStorageClient'
import logo from "@/public/images/logo.svg"
import { useRouter } from 'next-nprogress-bar'

type UserProps = {
    data: {
        name: string,
        email: string
    }
}

export default function UserHeader({ data }: UserProps) {
    const router = useRouter();
    const onLogout = () => {
        webStorageClient.removeToken();
        router.push("/sign-in")
    }
    return (
        <Navbar isBordered>
            <NavbarBrand>
                <Link href="/">
                    <Image
                        src={logo} // Replace with your actual logo path
                        alt="Logo"
                        width={50}
                        height={40}
                        className='h-full aspect-square'
                    />
                </Link>
            </NavbarBrand>
            <NavbarContent className="gap-4" justify="center">
                <NavbarItem>
                    <Link href="/" className="text-black hover:text-primary">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/scan" className="text-black hover:text-primary">
                        Scan
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform hover:scale-110 text-black"
                            color="primary"
                            name={data?.name}
                            size="sm"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-semibold text-sm text-black">{data?.name}</p>
                            <p className="font-semibold text-xs text-gray-500">{data?.email}</p>
                        </DropdownItem>
                        <DropdownItem key="profile_page" color='primary'>
                            <Link href="/profile" shallow className="w-full  text-black">
                                Trang cá nhân
                            </Link>
                        </DropdownItem>
                        <DropdownItem key="logout" className='text-black' color="danger" onClick={onLogout}>
                            Đăng xuất
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    )
}

