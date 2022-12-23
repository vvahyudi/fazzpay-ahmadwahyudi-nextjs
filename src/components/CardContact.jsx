import Image from "next/image";
export default function CardContact() {
    return (
        <div className="flex flex-row justify-between w-full gap-8">
            <div className="flex flex-row justify-evenly px-3">
                <div className="avatar">
                    <div className="w-14 rounded-lg">
                        <Image src="https://placeimg.com/192/192/people" width={52} height={52} />
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
    );
}
