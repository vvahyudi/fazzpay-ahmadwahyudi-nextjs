// import { BellIcon } from "@heroicons/react/24/outline";
import { PencilIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SectionProfile() {
    const router = useRouter();
    const { id } = router.query;
    console.log(router);
    return (
        <div className="flex flex-row w-[1200px] xl:w-[960px] sm:w-[700px] md:w-[840px] lg:w-[840px]">
            <span className="hidden">{id}</span>
            <div className="px-6 basis-4/5 h-[610px] py-6 mx-10 rounded-large bg-white drop-shadow-lg gap-4 ">
                <div className="flex flex-row justify-center">
                    <div className="flex flex-col justify-start items-center h-16 gap-4">
                        <div className="avatar">
                            <div className="w-20 rounded-lg">
                                <Image
                                    src="https://placeimg.com/192/192/people"
                                    width={52}
                                    height={52}
                                />
                            </div>
                        </div>
                        <div className="flex flex-row text-primarydark items-center text-sm pb-6">
                            <PencilIcon className="w-3 h-3" />
                            Edit
                        </div>
                        <div className="flex flex-col text-primarydark items-center text-sm pb-6 gap-2">
                            <h3 className="text-xl  font-bold">Samsul Bakri</h3>
                            <h4 className="text-primarydark text-sm">+62 813-8492-9994</h4>
                        </div>
                        <Link href="/detail-profile">
                            <div className="flex flex-row justify-between w-96 bg-primarywhite rounded-md p-4">
                                <div className="flex flex-row justify-evenly">
                                    <div className="flex-col flex">
                                        <h3 className="text-md font-bold">Personal Information</h3>
                                    </div>
                                </div>
                                <ArrowRightIcon className="w-6 h-6 text-primarydark" />
                            </div>
                        </Link>

                        <Link href="#">
                            <div className="flex flex-row justify-between w-96 bg-primarywhite rounded-md p-4">
                                <div className="flex flex-row justify-evenly">
                                    <div className="flex-col flex">
                                        <h3 className="text-md font-bold">Change Password</h3>
                                    </div>
                                </div>
                                <ArrowRightIcon className="w-6 h-6 text-primarydark" />
                            </div>
                        </Link>
                        <Link href="#">
                            <div className="flex flex-row justify-between w-96 bg-primarywhite rounded-md p-4">
                                <div className="flex flex-row justify-evenly">
                                    <div className="flex-col flex">
                                        <h3 className="text-md font-bold">Change PIN</h3>
                                    </div>
                                </div>
                                <ArrowRightIcon className="w-6 h-6 text-primarydark" />
                            </div>
                        </Link>
                        <Link href="#">
                            <div className="flex flex-row justify-between w-96 bg-primarywhite rounded-md p-4">
                                <div className="flex flex-row justify-evenly">
                                    <div className="flex-col flex">
                                        <h3 className="text-md font-bold">Logout</h3>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
