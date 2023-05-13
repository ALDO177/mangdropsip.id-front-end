import logos from '../../../assets/logos.png';

export default function PanelMangdropshipAuth(props: any){
    return (
        <section className="d-flex gap-4 mang-head">
            <div>
                <img src={logos} width={'250px'} alt="" />
            </div>
            <div className="align-self-center">
                <h4>Mangdropship</h4>
                <h4>Platflrom Dropship Terlengkap</h4>
                <h5>dan Terpercaya di Indonesia</h5>
            </div>
        </section>
    )
}