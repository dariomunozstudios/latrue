"use client"
import React, { useEffect} from "react"
import { provider, auth } from "@/firebase"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { signInWithPopup, onAuthStateChanged } from "firebase/auth"


export default function Login() {
    const router = useRouter();

    useEffect(()=>{
onAuthStateChanged(auth, user =>{
    if(user){
        router.push("/")
    }
} )
    },[])

    return (
        <div className="p-10">
<Button variant="outline" onClick={()=>signInWithPopup(auth,provider)}>LOGIN</Button>
        </div>
    )
}