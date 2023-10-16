"use client"
import React, { Fragment } from "react"
import { BsChatLeftHeartFill } from "react-icons/bs"
import { MdPublish } from "react-icons/md"
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
        
        
<Popover>
    {({open}) => (

<>

<Popover.Button className={`
${open ? '' : 'text-opacity-90'}
group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
>
<div className="btn btn-primary">
    Join <BsChatLeftHeartFill/>
</div>

</Popover.Button>


</>

    )}

</Popover>

</div>

    )
}

function PublishIcon(){
    return(
        <MdPublish/>
    )
}


export default Navbar