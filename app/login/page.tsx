"use client"
import React, { useEffect} from "react"
import { app, provider, auth } from "@/firebase"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { signInWithPopup, onAuthStateChanged } from "firebase/auth"


export default function Login() {
    return (
        <div className="p-10">
<Button variant="outline">LOGIN</Button>
        </div>
    )
}