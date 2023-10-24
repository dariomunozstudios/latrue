"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu } from "./Menu"

const Navbar = () => {
    return (
<div className="fixed top-0 p-4 flex justify-between z-10">
<Button variant="outline">
    <Link href={"/login"}>Login</Link>
</Button>
<Menu/>
</div>
)
}

export default Navbar