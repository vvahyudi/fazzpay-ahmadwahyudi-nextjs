import { Nunito } from "@next/font/google";
const nunito = Nunito();
import CardGraphic from "components/CardGraph";
import CardTxHistory from "components/CardHistory";
import Navbar from "components/Navbar";
import CardBalance from "components/CardBalance";
import Sidebar from "components/Sidebar";
import Layout from "layout";
export default function Dashboard() {
    return (
        <>
            <div className={`columns-1 ${nunito.className}`}>
                <Navbar />
            </div>
            <Layout>
                <div className="columns-1 w-1/5">
                    <Sidebar />
                </div>
                <div className="columns-1 w-4/5">
                    <CardBalance />
                    <div className="flex flex-row gap-6">
                        <div className="basis-3/5">
                            <CardGraphic />
                        </div>
                        <div className="basis-2/5">
                            <CardTxHistory />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
