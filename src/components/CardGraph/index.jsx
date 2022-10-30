import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
// import Image from "next/image";
export default function CardGraphic() {
    return (
        <div className="flex flex-col basis-3/5 px-6 h-[450px] mt-4 py-6 ml-5 rounded-large bg-white drop-shadow-lg gap-6">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col justify-evenly items-start ">
                    <ArrowDownIcon className="w-6 h-6 font-bold text-primarygreen mr-2" />
                    <h1 className="text-sm text-primarydark font-light tracking-widest">Income</h1>
                    <h1 className="text-2xl text-primarydark font-semibold leading-none">
                        Rp. 120.000
                    </h1>
                </div>
                <div className="flex flex-col justify-between items-start ">
                    <ArrowUpIcon className="w-6 h-6 font-bold text-primaryred mr-2" />
                    <h1 className="text-sm text-primarydark font-light tracking-widest">Expense</h1>
                    <h1 className="text-2xl text-primarydark font-semibold leading-none">
                        Rp. 120.000
                    </h1>
                </div>
            </div>
            <div className="flex flex-row w-80 h-64 bg-slate-400 items-center justify-center">
                <div>INI GRAFIK</div>
            </div>
        </div>
    );
}
