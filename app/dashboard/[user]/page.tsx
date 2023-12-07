"use client"
import { useAuth } from "@/components/FirebaseContext"
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const { user } = useAuth()
    const router = useRouter();
    if (user) {
        return (
            <div className="p-10">
                {user?.displayName}
                <div>
                    Form
                </div>
            </div>
        )
    }
    else {
        router.push("/")
    }
}