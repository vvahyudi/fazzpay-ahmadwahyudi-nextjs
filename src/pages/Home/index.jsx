import CardGraphic from "../../components/CardGraph";
import CardTxHistory from "../../components/CardTxHistory";
import Navbar from "../../components/navbar";
import SectionBalance from "../../components/SectionBalance";
import Sidebar from "../../components/Sidebar";
export default function Home() {
    return (
        <>
            <Navbar />
            <main className="container">
                <div className="flex flex-row justify-center items-center">
                    <Sidebar />
                    <div className="flex flex-col">
                        <SectionBalance />
                        <div className="flex flex-row">
                            <CardGraphic />
                            <CardTxHistory />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
