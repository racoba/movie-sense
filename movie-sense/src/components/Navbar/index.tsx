"use client"
import { useRouter } from "next/navigation"
import { NavMenu } from "./NavMenu"
import { UserMenu } from "./UserMenu"

export const Navbar = () => {
    const router = useRouter();

    const onClickLogo = () => {
        router.push("/main")
    }
    return (
        <div className="flex flex-row justify-evenly md:justify-between">
            <button
                className="text-2xl cursor-pointer hidden md:block"
                onClick={onClickLogo}
            >
                MovieSense
            </button>
            <NavMenu />
            <UserMenu />
        </div>
    )
}

