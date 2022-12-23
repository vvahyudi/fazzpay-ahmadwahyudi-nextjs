import Navbar from "components/Navbar";
import SectionDetailProfile from "components/SectionDetailProfile";
import Sidebar from "components/Sidebar";

export default function Profile() {
    return (
        <>
            <Navbar />
            <main className="container">
                <div className="flex flex-row">
                    <div className="lg:flex hidden flex-col">
                        <div className="flex-row basis-2/5">
                            <Sidebar />
                        </div>
                    </div>
                    <div className="flex flex-row basis-3/5 h-auto">
                        <SectionDetailProfile />
                    </div>
                </div>
            </main>
        </>
    );
}
