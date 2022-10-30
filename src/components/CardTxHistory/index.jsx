// import { BellIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function CardTxHistory() {
    return (
        <div className="flex flex-col px-4 h-[450px] basis-4/5 mt-4 py-6 ml-5 rounded-large bg-white drop-shadow-lg gap-6">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col justify-start items-end md:items-start flex-none w-72 h-16 gap-8">
                    <div className="flex flex-row justify-between w-full px-3">
                        <h3 className="text-md font-bold">Transaction History</h3>
                        <h3 className="text-xs font-thin text-primaryblue">
                            <Link href="transaction-history">See all</Link>
                        </h3>
                    </div>
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
                            <h3 className="text-md font-bold">Samsul Bakri</h3>
                            <h4 className="text-primarydark text-sm">Accept</h4>
                        </div>
                        <span className="flex flex-col justify-center pl-4 text-md font-bold text-primarygreen">
                            +Rp50.000
                        </span>
                    </div>
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
                            <h3 className="text-md font-bold">Samsul Bakri</h3>
                            <h4 className="text-primarydark text-sm">Accept</h4>
                        </div>
                        <span className="flex flex-col justify-center pl-4 text-md font-bold text-primarygreen">
                            +Rp50.000
                        </span>
                    </div>
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
                            <h3 className="text-md font-bold">Samsul Bakri</h3>
                            <h4 className="text-primarydark text-sm">Accept</h4>
                        </div>
                        <span className="flex flex-col justify-center pl-4 text-md font-bold text-primarygreen">
                            +Rp50.000
                        </span>
                    </div>
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
                            <h3 className="text-md font-bold">Samsul Bakri</h3>
                            <h4 className="text-primarydark text-sm">Accept</h4>
                        </div>
                        <span className="flex flex-col justify-center pl-4 text-md font-bold text-primarygreen">
                            +Rp50.000
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
