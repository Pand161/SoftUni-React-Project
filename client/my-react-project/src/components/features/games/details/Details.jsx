import { useParams } from "react-router-dom";
import * as style from "./Details.module.css";

import * as itemService from "../../../../services/itemService"
import { useEffect, useState } from "react";

export default function Details() {
    const {id} = useParams();
    const [item, setItem] = useState([])

    useEffect(() => {
        itemService.getOne(id)
        .then(result => setItem(result))
        .catch(err => {
            console.log(err);
        });
    }, [])

    return(
        <div id="details-div" className={style.detailsDiv}>
            <div className={style.detailsContainer}>
                <div className={style.detailsTitle}>Details</div>
                    <div className={style.detailsContent}>
                        <img src={item.imageUrl} alt={`${item.title}'s Image`}className={style.detailsImg}/>
                        <div className={style.detailsValues}>
                                <label>Title : {item.title}</label>
                                <label>Genre : {item.genre}</label>
                                <label>Description : {item.description} sdsdasadasdsda sadasdasdsada sdsdasdasda asssdaasd asdsdads </label>
                                <label>Price : {item.price}$</label>
                        </div>
                        <div className={style.detailsButtons}>
                            <button className={style.editBtn}>Edit</button>
                            <button className={style.deleteBtn}>Delete</button>
                        </div>
                    </div>
            </div>
    </div>
    )
}