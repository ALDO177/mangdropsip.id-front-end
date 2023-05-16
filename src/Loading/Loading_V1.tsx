import Image from 'next/image'
import loading from '../assets/animated-unscreen.gif';

export default function Loading_V1(){
   return(
        <div className="d-flex justify-content-center align-items-center" style={{height: '90vh'}}>
            <Image src={loading} height={230} alt='asduabf' style={{opacity: 0.6}}/>
        </div>
   )
}