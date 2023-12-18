import { Link, useNavigate, useParams } from "react-router-dom";
import * as style from "./Details.module.css";

import * as itemService from "../../../../services/itemService"
import * as commentService from "../../../../services/commentService"
import * as purchaseService from "../../../../services/purchaseService"
import { useContext, useEffect, useReducer, useState } from "react";
import Path from "../../../../paths";
import AuthContext from "../../../../contexts/authContext";
import reducer from "./commentReducer";
import useForm from "../../../../hooks/useForm";
import Comment from "./comment/Comment";

const initialState = {
    comment: ''
}


export default function Details() {
    const { auth, email, username } = useContext(AuthContext);
    const { id } = useParams();
    const [item, setItem] = useState([]);
    const [bought, setBought] = useState(false);
    const [, dispatch] = useReducer(reducer, []);
    const [allComments, setAllComments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        itemService.getOne(id)
        .then(result => setItem(result))
        .catch(err => {
            console.log(err);
        });

        // purchaseService.getBuyersOfProduct(id)
        //         .then(result => result.includes(auth._id) ? setBought(true) : setBought(false))
        //         .catch(err => {
        //             console.log(err.message);
        //         });

        commentService.getAll(id)
        .then((result) => setAllComments(result))
        
        

    }, [id])   

    const onDeleteHandler = () =>{
        if(confirm("Are you sure you want to delete this game?")){
            itemService.removeItem(id)
        .then(navigate(Path.AllGames))
        .catch(err => console.log(err))
        }
        
    }

    const onBuyHandler = (e) => {
        e.preventDefault();

        purchaseService.purchase(id, auth.id)
        .then(() => setBought(true))
        .catch(err => console.log(err))
    }

    const addCommentHandler = async () => {

        const newComment = await commentService.create(
            id,
            values.comment,
            username
        );

        console.log(values.comment)
        newComment.owner = { email };

        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment
        })

        navigate(Path.AllGames);
    }

    const { values, onChange, onSubmit } = useForm(addCommentHandler, initialState);

    return(
        <>
        <div id="details-div" className={style.detailsDiv}>
        <div className={style.commentsWidth}>
            <div className={style.detailsContainer}>
                <div className={style.detailsTitle}>Details</div>
                    <div className={style.detailsContent}>
                        <img src={item.imageUrl} alt={`${item.title}'s Image`}className={style.detailsImg}/>
                        <div className={style.detailsValues}>
                                <label>Title : {item.title}</label>
                                <label>Genre : {item.genre}</label>
                                <label>Description : {item.description}</label>
                                <label>Price : {item.price}$</label>
                        </div>
                        <div className={style.detailsButtons}>
                            <Link to={`${Path.Edit}/${id}`}><button className={style.editBtn}>Edit</button></Link>
                            <button className={style.deleteBtn} onClick={onDeleteHandler}>Delete</button>
                            {!bought && (<button className={style.buyBtn} onClick={onBuyHandler}>Buy</button>)}
                            {bought && (<div className={style.detailsTitle}>You have already bought this item</div>)}
                        </div>
                    </div>
                
                <div className={style.detailsTitle}>Comments:</div>
                <div className={style.commentList}>
                {allComments.map(comment => (<Comment key={comment._id} {...comment}/>))}
                </div>
                {allComments.length === 0 && (<div className={style.noComments}>No Comments Yet!</div>)}
                </div>
            </div>
        </div>

        <div id="comments-div" className={style.commentsDiv}>
            <div className={style.commentsWidth}>
                <div className={style.commentsContainer}>
            
                    <div className={style.detailsTitle}>Submit a Comment</div>
                    <form onSubmit={onSubmit}>
                        <div className={style.commentsForm}>
                    <textarea name="comment" id="comment" rows="3" cols="50" placeholder="Very good game i like it..." onChange={onChange} value={values.comment}></textarea>
                    <button type="submit" className={style.buyBtn}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}