
'use client';
import Image from "next/image";
import logos from '../../assets/logos.png';

export default function PanelMangdropship(){
    return(
        <section className="d-flex gap-4 mang-head">
            <div>
                <Image src={logos} width={250} alt="" />
            </div>
            <div className="align-self-center" style={{ fontFamily: 'Roboto' }}>
                <h4>Mangdropship</h4>
                <h4 style={{fontWeight: '700'}}>Platflrom Dropship Terlengkap</h4>
                <h5 style={{fontWeight: '500'}}>dan Terpercaya di Indonesia</h5>
            </div>
        </section>
    )
}