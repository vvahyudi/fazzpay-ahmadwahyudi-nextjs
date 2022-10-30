import {
    ArrowRightOnRectangleIcon,
    ArrowUpIcon,
    PlusIcon,
    RectangleGroupIcon,
    UserIcon
} from "@heroicons/react/24/outline";

// import Image from "next/image";
export default function Sidebar() {
    return (
        <div className="max-h-[678px] p-3 space-y-2 w-60 bg-white text-primarydark rounded-large">
            <div className="divide-y divide">
                <ul className="pt-2 pb-4 space-y-6 text-sm pl-3">
                    <li className="text-primarydark text-lg font-semibold focus-within:text-primaryblue focus-within:border-0 focus-within:border-l-4 focus-within:border-primaryblue">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="flex items-center p-2 space-x-3 rounded-md"
                        >
                            <RectangleGroupIcon className="w-6 h-6" />
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li className="text-primarydark text-lg font-semibold">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="flex items-center p-2 space-x-3 rounded-md"
                        >
                            <ArrowUpIcon className="w-6 h-6 text-primarydark" />
                            <span>Transfer</span>
                        </a>
                    </li>
                    <li className="text-primarydark text-lg font-semibold">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="flex items-center p-2 space-x-3 rounded-md"
                        >
                            <PlusIcon className="w-6 h-6 text-primarydark" />
                            <span>Top Up</span>
                        </a>
                    </li>
                    <li className="text-primarydark text-lg font-semibold">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="flex items-center p-2 space-x-3 rounded-md"
                        >
                            <UserIcon className="w-6 h-6 text-primarydark" />
                            <span>Profile</span>
                        </a>
                    </li>
                    <li className="text-primarydark text-lg font-semibold pt-72">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="flex items-center p-2 space-x-3 rounded-md"
                        >
                            <ArrowRightOnRectangleIcon className="w-6 h-6 text-primarydark" />
                            <span>Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
