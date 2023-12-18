import { Link } from "react-router-dom"
import styles from "./Home.module.css"
import * as itemService from "../../../services/itemService"
import { useState, useEffect } from "react"
import Item from "../games/item/Item"

export default function Home() {
    const [items, setItems] = useState([])

    useEffect(() => {
        itemService.getAll()
        .then(result => {
            setItems(result.slice(-3));
        })
        .catch(err => {
            console.log(err);
        });
    }, [])
    
    return(
        <div className={styles.homeContent}>
                <h1 className={styles.homeTitle}>Welcome to Game Bazaar</h1>
                <p className={styles.homeText}>Most affordable prices for the Games you love to play, <br /> We are in Top 3 most popular Marketplaces these Days! </p>
                <div>
                    <Link to={"/all-games"} ><button type="button" className={styles.homeButton}><span></span>ENTER</button></Link>
                </div>

                <h2>Our Latest Offers!</h2>

                <div className={styles.productContainer}>
                
                {items.map(item => (
            <Item key={item._id} {...item} />
        ))}    

        {items.length === 0 && (
               <div className="products-title">No Games Yet!</div>
            )}
        

            </div>


        </div>
            
    )
}