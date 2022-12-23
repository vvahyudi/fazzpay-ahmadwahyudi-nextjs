import { Nunito } from "@next/font/google";
const nunito = Nunito();
export default function Layout(props) {
    return (
        <>
            <main className={`p-5 mx-auto container inset-0 ${nunito.className}`}>
                {props.children}
            </main>
        </>
    );
}
