import CardGraphic from "../../components/CardGraph";
import CardTxHistory from "../../components/CardTxHistory";
import Navbar from "../../components/navbar";
import SectionBalance from "../../components/SectionBalance";
import Sidebar from "../../components/Sidebar";
export default function Home() {
    return (
        <>
            <Navbar />
            <main className="container sm:h-[1050px] lg:h-[650px] md:h-[1050px] ">
                <div className="flex flex-row">
                    <div className="lg:flex hidden flex-col">
                        <div className="flex-row basis-2/5">
                            <Sidebar />
                        </div>
                    </div>
                    <div className="flex flex-row basis-3/5 h-auto">
                        <div className="flex flex-col max-w-full">
                            <SectionBalance />
                            <div className="flex h-full flex-col lg:flex-row  w-full">
                                <CardGraphic />
                                <CardTxHistory />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
