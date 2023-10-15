import React from "react"
import { BsChatLeftHeartFill } from "react-icons/bs"
import { Popover, Transition } from '@headlessui/react'

const join = [
{
name: 'Publish',
href: '##',
icon: PublishIcon,
},
]

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

function PublishIcon(){
    return(
        <></>
    )
}


export default Navbar