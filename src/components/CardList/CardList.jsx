import cardlist from "./CardList.module.css"
import data from "../dataList";
import Card from "../Card/Card"
// eslint-disable-next-line react/prop-types
const CardList = ({data:customData, onLike}) => {
    const listData = customData || data;
    return (
    
      <ol className={cardlist.cardlist_wrap}>
        {listData.map((item)=> (
             
            <li key={item.id}>
            <Card
          
            img={item.img}
            name={item.name}
            price={item.price}
            description={item.description}
            features={item.features}
            onLike={()=> onLike(item)}

        />
        </li>
     
        ))}
        </ol>
    )
}

export default CardList;