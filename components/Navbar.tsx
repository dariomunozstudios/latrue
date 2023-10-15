import React from "react"
import { BsChatLeftHeartFill } from "react-icons/bs"
const Navbar = () => {
    return (
        <div className="sticky top-8 flex justify-between items-center">

        <div className="font-bold text-2xl">
        Latrue
        </div>
        
        <button className="btn btn-primary">
        Join <BsChatLeftHeartFill/>
        </button>

        </div>
    )
}

export default Navbar