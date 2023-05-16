
'use client';
import Image from "next/image";
import logos from '../../assets/logos.png';

export default function PanelMangdropship(){
    return(
        <section className="d-flex gap-4 mang-head">
            <div>
                <Image src={logos} width={250} alt="" />
            </div>
            <div className="align-self-center">
                <h4>Mangdropship</h4>
                <h4>Platflrom Dropship Terlengkap</h4>
                <h5>dan Terpercaya di Indonesia</h5>
            </div>
        </section>
    )
}