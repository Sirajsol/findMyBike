import Image from 'next/image';
import Style from './Ab.module.css'
import j from '../../../public/bycicle.jpeg'
const Ab = () => {
    return <div className={Style.cont}>
<div className={Style.onn}>jjjjjjjjjjjjj</div>
<div className={Style.onn}>jjjjjjjjjjjjj</div>
<div className={Style.onn}>dddd</div>
<div className={Style.tt}>


    <Image src={j} fill className={Style.mm}/>
    
</div>
    </div>
}
 
export default Ab;