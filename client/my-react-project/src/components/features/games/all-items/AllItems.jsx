import { useState, useEffect} from "react"

import * as itemService from "../../../../services/itemService"
import Item from "../item/Item";

import * as style from "./AllItems.module.css"

export default function AllItems() {
    const [items, setItems] = useState([])

    useEffect(() => {
        itemService.getAll()
        .then(result => setItems(result))
        .catch(err => {
            console.log(err);
        });
    }, [])



    return(
        <div>
            <h1 className={style.productsTitle}>You Can Enjoy All Of Our Games Here!</h1>
            <div className={style.productContainer}>

        {items.map(item => (
            <Item key={item._id} {...item} />
        ))}    

        {items.length === 0 && (
               <div className={style.productsTitle}>No Games Yet!</div>
            )}
        
            </div>
        </div>
    )
}