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
        
        <div></div>
        <Popover>

        <Popover.Button>
        <button className="btn btn-primary">
        Join <BsChatLeftHeartFill/>
        </button>
        </Popover.Button>

<Transition as={Fragment}
enter="transition ease-out duration-200"
enterFrom="opacity-0 translate-y-1"
enterTo="opacity-100 translate-y-0"
leave="transition ease-in duration-150"
leaveFrom="opacity-100 translate-y-0"
leaveTo="opacity-0 translate-y-1">


<Popover.Panel>




</Popover.Panel>




</Transition>
</Popover>
</div>
</div>
    )
}

function PublishIcon(){
    return(
        <MdPublish/>
    )
}


export default Navbar