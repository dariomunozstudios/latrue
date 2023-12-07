"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu } from "./Menu"
import React, { useState } from "react"
import { useAuth } from "./FirebaseContext"

const Navbar = () => {
    const { user } = useAuth()

    return (
        <div className="fixed top-0 p-4 flex justify-between z-10">
            {user ?
                <>
                    <Menu />
                </>
                :
                <>
                    <Button variant="outline">
                        <Link href={"/login"}>Login</Link>
                    </Button>
                </>}

        </div>
    )
}

export default Navbar