// import { BellIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function SectionTxHistory() {
    return (
        <div className="flex flex-row">
            <div className="px-6 basis-4/5 h-[610px] py-6 mx-10 rounded-large bg-white drop-shadow-lg gap-4 ">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col justify-start items-start h-16 gap-8">
                        <div className="flex flex-row justify-between w-full px-3">
                            <h3 className="text-md font-bold">Transaction History</h3>
                            <h3 className="text-xs font-thin text-primaryblue">
                                <Link href="transaction-history">See all</Link>
                            </h3>
                        </div>
                        <div className="flex flex-row justify-between w-full gap-8">
                            <div className="flex flex-row justify-evenly px-3">
                                <div className="avatar">
                                    <div className="w-14 rounded-lg">
                                        <Image
                                            src="https://placeimg.com/192/192/people"
                                            width={52}
                                            height={52}
                                        />
                                    </div>
                                </div>
                                <div className="flex-col flex pl-4">
                                    <h3 className="text-md font-bold">Samsul Bakri</h3>
                                    <h4 className="text-primarydark text-sm">Accept</h4>
                                </div>
                            </div>
                            <span className="flex flex-col justify-center items-end text-md font-bold text-primarygreen">
                                +Rp50.000
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
