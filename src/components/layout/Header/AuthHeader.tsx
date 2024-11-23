'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react"
import logo from "@/public/images/logo.svg"
export default function AuthHeader() {
    return (
        <Navbar isBordered>
            <NavbarBrand>
                <Link href="/">
                    <Image
                        src={logo} 
                        alt="Logo"
                        width={50}
                        height={50}
                    />
                </Link>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="primary" href="/login" variant="flat">
                        Đăng nhập
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="/register" variant="flat">
                        Đăng kí
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

