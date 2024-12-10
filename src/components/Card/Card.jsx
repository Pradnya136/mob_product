/* eslint-disable react/prop-types */
import { useState } from "react"
import styles from "./Card.module.css"

const Card = ({name, img, price, description, features, onLike}) =>{
    // console.log(features)

    const [isfeatureActive, setfeatureActive] = useState(false)
 
    const [liked,setLiked] = useState(false)
    // function handleclick (){
    //     setisVisible(!isVisible)
    // }
    const handleliked = ()=>{
        setLiked(true)
        onLike();
    }

    return(
        <>
        <div className={styles.main}>
            <img className={styles.img} alt="product image" src={img}/>
            <h1 className={styles.productName}>{name}</h1>
            <h1 className={styles.productPrice}>{price}</h1>
            <h2 className={styles.description}>{description}</h2>
            
            <button onClick={()=> setfeatureActive(!isfeatureActive)} className={styles.feature_btn}>View Features</button>
            <span onClick={handleliked} disabled={liked} className={styles.fav}>{liked?"💖":"🩶"}</span>
            
            </div>
           <div className={`${styles.features} ${isfeatureActive ? styles.active : ""}`}>
                <ul>
                    {features && features.map((item,index) => (<li key={index}>{item}</li>))|| <h1>No features available</h1>}
                </ul>
            </div> 
       
        </>
    )
}

export default Card;