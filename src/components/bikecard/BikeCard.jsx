import Image from 'next/image';
import Style from'./BickCard.module.css'
import Link from 'next/link';
import byc from '../../../public/bycicle.jpeg'

const BikeCard = ({card}) => {
 
    return   <div className={Style.whole}>
        <Link  className={Style.whole} href={`/bikes/${card.id}`}>
        <div className={Style.img}>
    {/* <Image fill src={"https://files.bikeindex.org/uploads/Pu/801478/large_0A0C50FE-F4E3-4545-8625-B533EE068CE8.jpeg"}alt='img' */}
    <Image fill src={card.thumb?card.thumb:byc}alt='img'

    className={Style.ii}
    />
</div>
    <div className={Style.cont}>
<div className={Style.title}>{card.title||"nothing"} </div>
<div className={Style.desc}>{card.description}</div>

{card.date_stolen&&<h5>stolen at  {new Date(card.date_stolen*1000).toLocaleString().substring(0,11)}</h5>}
{card.stolen_location&&<h5>location  {card.stolen_location}</h5>}

    </div>
    
    </Link>
    
    </div>
}
 
export default BikeCard;