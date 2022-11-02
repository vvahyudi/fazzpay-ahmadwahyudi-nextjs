import CardGraphic from "components/CardGraph";
import CardTxHistory from "components/CardTxHistory";
import Navbar from "components/navbar";
import SectionBalance from "components/SectionBalance";
import Sidebar from "components/Sidebar";
import Layout from "layout";
export default function Dashboard() {
    return (
        <>
            <Navbar />
            <Layout>
                <div className="flex flex-row">
                    <div className="md:flex hidden flex-col">
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
            </Layout>
        </>
    );
}
