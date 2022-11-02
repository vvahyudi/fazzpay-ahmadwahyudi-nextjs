import Navbar from "components/navbar";
import SectionProfile from "components/SectionProfile";
// import SectionTx from "../../components/SectionTx";
import Sidebar from "components/Sidebar";

export default function Profile() {
    return (
        <>
            <Navbar />
            <main className="container sm:h-[1050px] lg:h-[650px] md:h-[1050px]">
                <div className="flex flex-row">
                    <div className="lg:flex hidden flex-col">
                        <div className="flex-row basis-2/5">
                            <Sidebar />
                        </div>
                    </div>
                    <div className="flex flex-row basis-3/5 h-auto">
                        <SectionProfile />
                    </div>
                </div>
            </main>
        </>
    );
}
