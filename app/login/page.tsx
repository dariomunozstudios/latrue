"use client"
import React, { useEffect, useState } from "react"
import { provider, auth } from "@/firebase"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { signInWithPopup, onAuthStateChanged } from "firebase/auth"
import { useAuth } from "@/components/FirebaseContext"


export default function Login() {
    const router = useRouter();
    const { user, loading } = useAuth();

    if (user) {
        router.push("/dashboard/" + user.uid)
    }

    return (
        <div className="p-10">
            {user === null ?
                <>
                    <Button variant="outline" onClick={() => signInWithPopup(auth, provider)}>Google Auth</Button>
                </>
                :
                <>
                </>
            }
        </div>
    )
}