import { BellIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Navbar() {
    return (
        <header>
            <nav className="flex flex-row p-10 rounded-large bg-white drop-shadow-xl">
                <div className="flex flex-col flex-none w-36 md:items-end h-16 justify-center">
                    <span className="text-3xl text-primaryblue font-bold tracking-wide">
                        FazzPay
                    </span>
                </div>
                <div className="grow h-16"></div>
                <div className="flex flex-col justify-center items-end md:items-start flex-none w-72 h-16">
                    <div className="flex flex-row">
                        <div className="avatar">
                            <div className="w-14 rounded-lg">
                                <Image
                                    src="https://placeimg.com/192/192/people"
                                    width={52}
                                    height={52}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-evenly items-start px-3">
                            <h3 className="text-md font-bold">Robert Chandler</h3>
                            <h4 className="text-primarydark text-sm">+62 8139 3877 7946</h4>
                        </div>
                        <span className="flex flex-col justify-center px-2">
                            <BellIcon className="w-8 h-8 text-primarydark" />
                        </span>
                    </div>
                </div>
            </nav>
        </header>
    );
}
