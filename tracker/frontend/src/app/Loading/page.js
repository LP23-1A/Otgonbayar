import GeldICON from "@/icon/GeldICON";
import GeldLOGO from "@/icon/GeldLOGO";

export default function loading() {
    return(
        <section className="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-white gap-[48px]">
            <div className="flex gap-[10px] items-center">
                <div><GeldLOGO/></div>
                <div><GeldICON/></div>
            </div>
            <div className="flex flex-col gap-[10px] items-center">
                <span className="loading loading-spinner text-primary loading-lg"></span>
                <p>Түр хүлээнэ үү...</p>
            </div>
        </section>
    )
}