
import Path from "../../../../paths";
import * as style from "./Item.module.css";
import { Link } from "react-router-dom";

export default function Item({title,genre,imageUrl,_id}) {
    
    return(
            <div className={style.productItem}>
                <img src={imageUrl} alt={`${title}'s Image`} />
                <h3>{title}</h3>
                <p>{genre}</p>
                <Link to={`${Path.Details}/${_id}`}><button className={style.productButton}>Details</button></Link>
            </div>
    )
}