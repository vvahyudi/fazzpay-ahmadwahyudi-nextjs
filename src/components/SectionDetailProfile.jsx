// import Link from "next/link";

export default function SectionDetailProfile() {
    return (
        <div className="flex flex-row w-[1200px] xl:w-[960px] sm:w-[700px] md:w-[840px] lg:w-[840px]">
            <div className="px-6 basis-4/5 h-[610px] py-6 mx-10 rounded-large bg-white drop-shadow-lg gap-4 ">
                <div className="flex flex-row justify-start">
                    <div className="flex flex-col justify-start items-start h-16 gap-4">
                        <div className="flex flex-col text-primarydark items-start text-sm pb-6 gap-2">
                            <h3 className="text-xl  font-bold">Personal Information</h3>
                            <p className="text-primarydark text-sm">
                                We got your personal information from the sign up <br /> proccess.
                                If you want to make changes on <br /> your information, contact our
                                support.
                            </p>
                        </div>
                        <div className="flex flex-row justify-between bg-primarywhite rounded-md p-4 w-[500px]">
                            <div className="flex flex-row justify-evenly">
                                <div className="flex-col flex">
                                    <h3 className="text-xs">First Name</h3>
                                    <h3 className="text-xl font-bold">Robert</h3>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between bg-primarywhite rounded-md p-4 w-[500px]">
                            <div className="flex flex-row justify-evenly">
                                <div className="flex-col flex">
                                    <h3 className="text-xs">Last Name</h3>
                                    <h3 className="text-xl font-bold">Robert</h3>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between bg-primarywhite rounded-md p-4 w-[500px]">
                            <div className="flex flex-row justify-evenly">
                                <div className="flex-col flex">
                                    <h3 className="text-xs">Verified Email</h3>
                                    <h3 className="text-xl font-bold">pewdiepie1@gmail.com</h3>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row justify-between items-center bg-primarywhite rounded-md p-4 w-[500px]">
                            <div className="flex flex-row justify-evenly">
                                <div className="flex-col flex">
                                    <h3 className="text-xs">Phone Number</h3>
                                    <h3 className="text-xl font-bold">+62 813-9387-7946</h3>
                                </div>
                            </div>
                            <h3 className="text-xs text-primaryblue">Manage</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
