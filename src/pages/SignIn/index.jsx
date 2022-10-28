import { useState } from "react";
import Phone2 from "../../assets/img/phone2.png";
// import AuthBackground from "../../assets/img/authbackground.png";
import Image from "next/image";
import { EnvelopeIcon, EyeIcon, EyeSlashIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

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
                            Start Accessing Banking Needs With All Devices and All Platforms With
                            30.000+ Users
                        </p>
                        <p className="text-md font-light text-primarydark/75 leading-relaxed">
                            Transfering money is eassier than ever, you can access FazzPay wherever
                            you are. Desktop, laptop, mobile phone? we cover all of that for you!
                        </p>
                    </div>
                    <div className="flex flex-col pl-10 pr-20">
                        <form className="mt-8 mb-0 space-y-4">
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full py-4 pl-12 border-0 border-b-2 border-gray-400 text-sm bg-white focus:border-primaryblue focus:text-primaryblue focus:outline-none focus:ring-0"
                                        placeholder="Enter your e-mail"
                                    />
                                    <span className="absolute inset-y-0 inline-flex items-center left-2 focus-within:text-primaryblue">
                                        <EnvelopeIcon className="w-5 h-5 text-primaryblue" />
                                    </span>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        className="w-full p-4 pl-12 border-0 border-b-2 border-gray-400 text-sm  focus:border-primaryblue focus:text-primaryblue focus:outline-none focus:ring-0"
                                        placeholder="Enter your password"
                                    />
                                    <span className="absolute inset-y-0 inline-flex items-center left-2">
                                        <LockClosedIcon className="w-5 h-5 text-primaryblue" />
                                    </span>
                                    <button
                                        className="absolute inset-y-0 inline-flex items-center right-4"
                                        onClick={handleShowPassword}
                                    >
                                        {" "}
                                        {showPassword ? (
                                            <EyeIcon className="w-5 h-5 text-primaryblue" />
                                        ) : (
                                            <EyeSlashIcon className="w-5 h-5 text-primaryblue" />
                                        )}
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <p className="text-sm text-primarydark pt-2 pb-20 ">
                                    Forgot Password ?
                                </p>
                            </div>

                            <div className="flex items-center justify-between">
                                <button className="submit inline-block w-full px-5 py-3 text-sm font-medium bg-primarydark/40 text-primarydark focus:text-white hover:text-white hover:bg-primaryblue focus:bg-primaryblue rounded-lg">
                                    Log in
                                </button>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-sm text-primarydark pt-2">
                                    Don&apos;t Have any account? Let&apos;s{" "}
                                    <span className="text-primaryblue font-bold">
                                        <Link href="../SignUp">Sign Up</Link>
                                    </span>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
