// import { BellIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function CardTxHistory() {
    return (
        <div className="px-4 py-6 flex-col bg-white rounded-lg drop-shadow-lg">
            <div className="flex flex-row justify-between w-full px-3">
                <h3 className="text-md font-bold">Transaction History</h3>
                <h3 className="text-xs font-thin text-primaryblue">
                    <Link href="transaction-history">See all</Link>
                </h3>
            </div>
            <div className="flex flex-row justify-start px-4 py-2 my-2 bg-white rounded-lg drop-shadow-lg">
                <div className="avatar">
                    <div className="w-14 rounded-lg">
                        <Image src="https://placeimg.com/192/192/people" width={52} height={52} />
                    </div>
                </div>
                <div className="flex flex-col justify-evenly items-start px-3 grow">
                    <h3 className="text-md font-bold">Samsul Bakri</h3>
                    <h4 className="text-primarydark text-sm">Accept</h4>
                </div>
                <span className="inline-flex items-center pl-4 text-md font-bold text-primarygreen">
                    +Rp50.000
                </span>
            </div>
            <div className="flex flex-row justify-start px-4 py-2 my-2 bg-white rounded-lg drop-shadow-lg">
                <div className="avatar">
                    <div className="w-14 rounded-lg">
                        <Image src="https://placeimg.com/192/192/people" width={52} height={52} />
                    </div>
                </div>
                <div className="flex flex-col justify-evenly items-start px-3 grow">
                    <h3 className="text-md font-bold">Samsul Bakri</h3>
                    <h4 className="text-primarydark text-sm">Accept</h4>
                </div>
                <span className="inline-flex items-center pl-4 text-md font-bold text-primarygreen">
                    +Rp50.000
                </span>
            </div>
            <div className="flex flex-row justify-start px-4 py-2 my-2 bg-white rounded-lg drop-shadow-lg">
                <div className="avatar">
                    <div className="w-14 rounded-lg">
                        <Image src="https://placeimg.com/192/192/people" width={52} height={52} />
                    </div>
                </div>
                <div className="flex flex-col justify-evenly items-start px-3 grow">
                    <h3 className="text-md font-bold">Samsul Bakri</h3>
                    <h4 className="text-primarydark text-sm">Accept</h4>
                </div>
                <span className="inline-flex items-center pl-4 text-md font-bold text-primarygreen">
                    +Rp50.000
                </span>
            </div>
            <div className="flex flex-row justify-start px-4 py-2 my-2 bg-white rounded-lg drop-shadow-lg">
                <div className="avatar">
                    <div className="w-14 rounded-lg">
                        <Image src="https://placeimg.com/192/192/people" width={52} height={52} />
                    </div>
                </div>
                <div className="flex flex-col justify-evenly items-start px-3 grow">
                    <h3 className="text-md font-bold">Samsul Bakri</h3>
                    <h4 className="text-primarydark text-sm">Accept</h4>
                </div>
                <span className="inline-flex items-center pl-4 text-md font-bold text-primarygreen">
                    +Rp50.000
                </span>
            </div>
            <div className="flex flex-row justify-start px-4 py-2 my-2 bg-white rounded-lg drop-shadow-lg">
                <div className="avatar">
                    <div className="w-14 rounded-lg">
                        <Image src="https://placeimg.com/192/192/people" width={52} height={52} />
                    </div>
                </div>
                <div className="flex flex-col justify-evenly items-start px-3 grow">
                    <h3 className="text-md font-bold">Samsul Bakri</h3>
                    <h4 className="text-primarydark text-sm">Accept</h4>
                </div>
                <span className="inline-flex items-center pl-4 text-md font-bold text-primarygreen">
                    +Rp50.000
                </span>
            </div>
        </div>
    );
}
