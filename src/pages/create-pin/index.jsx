// import { useState } from "react";
import Phone2 from "../../assets/img/phone2.png";
// import AuthBackground from "../../assets/img/authbackground.png";
import Image from "next/image";
// import {
//     EnvelopeIcon,
//     EyeIcon,
//     EyeSlashIcon,
//     LockClosedIcon,
//     UserIcon
// } from "@heroicons/react/24/outline";
// import Link from "next/link";
export default function CreatePin() {
    // const [showPassword, setShowPassword] = useState(false);

    // const handleShowPassword = (e) => {
    //     e.preventDefault();
    //     setShowPassword(!showPassword);
    // };

    return (
        <main className="relative max-w-screen-xl mx-auto sm:px-0 flex justify-center h-[1024px] p-20">
            <section className="flex flex-col h-full justify-center bg-primaryblue basis-3/5">
                <div className="flex flex-col items-start">
                    <h1 className="text-3xl font-medium text-white px-36 ">FazzPay</h1>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        src={Phone2}
                        alt="banner-login"
                        className="object-contain w-[478px] h-[550px]"
                    />
                </div>
                <div className="flex flex-col items-start px-36">
                    <h1 className="text-2xl font-medium text-white pb-2">
                        App that Covering Banking Needs.
                    </h1>
                    <p className="text-sm text-white font-light leading-relaxed">
                        FazzPay is an application that focussing in banking needs for all users{" "}
                        <br />
                        in the world. Always updated and always following world trends. <br />
                        5000+ users registered in FazzPay everyday with worldwide <br />
                        users coverage.
                    </p>
                </div>
            </section>
            <section className="flex bg-white justify-center items-center basis-2/5 h-full">
                <div className="flex flex-col">
                    <div className="flex flex-col items-start pl-10 pr-20">
                        <p className="text-2xl font-medium text-primarydark pb-10 leading-relaxed">
                            Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That
                            You Created Yourself.
                        </p>
                        <p className="text-md font-light text-primarydark/75 leading-relaxed">
                            Create 6 digits pin to secure all your money and your data in FazzPay
                            app. Keep it secret and don’t tell anyone about your FazzPay account
                            password and the PIN.
                        </p>
                    </div>
                    <div className="flex flex-col pl-10 pr-20">
                        <form className="mt-8 mb-0 space-y-4">
                            <div className="flex flex-row gap-2">
                                <input type="text" placeholder="___" className="w-14 max-w-xs" />
                            </div>
                            <div className="flex items-center justify-between pt-10 ">
                                <button className="submit inline-block w-full px-5 py-3 text-sm font-medium text-primarydark bg-primarydark/40  focus:text-white hover:text-white hover:bg-primaryblue focus:bg-primaryblue rounded-lg">
                                    Log in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
