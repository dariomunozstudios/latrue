"use client"
import React, { Fragment } from "react"
import { BsChatLeftHeartFill } from "react-icons/bs"
import { MdPublish } from "react-icons/md"
import { Popover, Transition } from '@headlessui/react'

const Navbar = () => {
    return (
        <div className="sticky top-8 flex justify-between items-center">

        <div className="font-bold text-2xl">
        Latrue
        </div>
        
        
<div className="btn btn-primary">
    Únete <BsChatLeftHeartFill/>

</div>

</div>
)
}




export default Navbar