import { NavMenu } from "./NavMenu"
import { UserMenu } from "./UserMenu"

export const Navbar = () => {
    return (
        <div className="flex flex-row justify-between">
            <h1 className="text-2xl">MovieSense</h1>
            <NavMenu />
            <UserMenu />
        </div>
    )
}

