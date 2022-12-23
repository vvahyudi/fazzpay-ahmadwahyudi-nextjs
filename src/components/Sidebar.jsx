import {
    ArrowRightOnRectangleIcon,
    ArrowUpIcon,
    PlusIcon,
    RectangleGroupIcon,
    UserIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

// import Image from "next/image";
export default function Sidebar() {
    const router = useRouter();
    const handleLogout = () => {
        router.push("/auth/signin");
    };
    return (
        <div className="p-3 space-y-2 bg-white text-primarydark rounded-large drop-shadow-lg">
            <div className="divide-y divide">
                <ul className="pt-2 pb-4 space-y-6 text-sm pl-3">
                    <li className="text-primarydark text-lg font-semibold focus-within:text-primaryblue focus-within:border-0 focus-within:border-l-4 focus-within:border-primaryblue active:text-primaryblue active:border-0 active:border-l-4 active:border-primaryblue">
                        <Link
                            rel="noopener noreferrer"
                            href={"/"}
                            className="flex items-center p-2 space-x-3 rounded-md"
                        >
                            <RectangleGroupIcon className="w-6 h-6" />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className="text-primarydark text-lg font-semibold">
                        <Link
                            rel="noopener noreferrer"
                            href="/transfer"
                            className="flex items-center p-2 space-x-3 rounded-md"
                        >
                            <ArrowUpIcon className="w-6 h-6 text-primarydark" />
                            <span>Transfer</span>
                        </Link>
                    </li>
                    <li className="text-primarydark text-lg font-semibold">
                        <Link
                            rel="noopener noreferrer"
                            href=""
                            className="flex items-center p-2 space-x-3 rounded-md"
                        >
                            <PlusIcon className="w-6 h-6 text-primarydark" />
                            <span>Top Up</span>
                        </Link>
                    </li>
                    <li className="text-primarydark text-lg font-semibold">
                        <Link
                            rel="noopener noreferrer"
                            href="/profile"
                            className="flex items-center p-2 space-x-3 rounded-md"
                        >
                            <UserIcon className="w-6 h-6 text-primarydark" />
                            <span>Profile</span>
                        </Link>
                    </li>
                    <li
                        className="text-primarydark text-lg font-semibold pt-60 pb-4"
                        onClick={handleLogout}
                    >
                        <Link
                            rel="noopener noreferrer"
                            href=""
                            className="flex items-center p-2 space-x-3 rounded-md"
                        >
                            <ArrowRightOnRectangleIcon className="w-6 h-6 text-primarydark" />
                            <span>Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
