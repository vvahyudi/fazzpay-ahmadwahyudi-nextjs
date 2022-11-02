import { Nunito } from "@next/font/google";
const nunito = Nunito();
export default function Layout(props) {
    return (
        <>
            <main
                className={`container sm:h-[1050px] lg:h-[650px] md:h-[1050px] ${nunito.className}`}
            >
                {props.children}
            </main>
        </>
    );
}
