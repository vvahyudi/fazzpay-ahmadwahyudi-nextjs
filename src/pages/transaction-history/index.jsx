// import CardTxHistory from "../../components/CardTxHistory";
import Navbar from "components/Navbar";
import SectionTxHistory from "components/SectionTxHistory";
import Sidebar from "components/Sidebar";

export default function TxHistory() {
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
                        <SectionTxHistory />
                    </div>
                </div>
            </main>
        </>
    );
}
