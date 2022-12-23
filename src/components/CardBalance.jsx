import { ArrowUpIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function CardBalance() {
    return (
        <div className="flex flex-row justify-between px-10 h-40 py-4 ml-5 mb-5 md:w-auto rounded-large bg-primaryblue drop-shadow-lg">
            <div className="flex flex-col justify-evenly items-start ">
                <h1 className="text-sm md:text-lg text-white font-light tracking-wide">Balance</h1>
                <h1 className="text-2xl text-white font-semibold leading-none md:text-3xl">
                    Rp. 120.000
                </h1>
                <h1 className="text-sm text-white font-thin tracking-widest">+62 813-9387-7946</h1>
            </div>
            <div className="flex flex-col items-end justify-between gap-2">
                <div className="relative ">
                    <button className="btn w-28 md:w-36 bg-white/25 border-white hover:bg-blue-600 hover:border-white focus:bg-blue-600 focus:border-white">
                        <span className="absolute inset-y-0 inline-flex  items-center left-2">
                            <ArrowUpIcon className="w-5 h-5 font-bold text-white mr-2" />
                            Transfer
                        </span>
                    </button>
                </div>
                <div className="relative">
                    <button className="btn w-28 md:w-36 bg-white/25 border-white hover:bg-blue-600 hover:border-white focus:bg-blue-600 focus:border-white">
                        <span className="absolute inset-y-0 inline-flex items-center left-2">
                            <PlusIcon className="w-5 h-5 font-bold text-white mr-2" />
                            Top Up
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
