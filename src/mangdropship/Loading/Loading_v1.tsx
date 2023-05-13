import imgs from '../../assets/animated-unscreen.gif';

export default function Loading_v1(props: any){
    return(
        <div className="d-flex justify-content-center align-items-center" style={{height: '90vh'}}>
            <img src={imgs} width={'230px'} style={{opacity: 0.6}} alt="" />
        </div>
    )
}