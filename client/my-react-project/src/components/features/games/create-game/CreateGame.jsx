import { useNavigate } from 'react-router-dom';
import style from "./Create.module.css"
import * as itemService from "../../../../services/itemService"
import Path from "../../../../paths";
import useForm from "../../../../hooks/useForm";

const initialState = {
    title: '',
    genre: '',
    imageUrl: '',
    description: '',
    price: '',
}

export default function CreateGame() {
    const navigate = useNavigate();

    const createSubmitHandler = (values) => {

        itemService.createItem(values)
            .then(() => navigate(Path.AllGames))
            .catch(err => console.log(err));
    };

    const { values, onChange, onSubmit } = useForm(createSubmitHandler, initialState);

    

    return(
        <div id="create-form" className={style.createForm}>
        <form id="create" onSubmit={onSubmit}>
            <div className={style.createContainer}>

            <div className={style.createTitle}>Create New Game Offer</div>

                <label htmlFor="title">Name of the Game:</label>
                <input type="text" id="title" name="title" placeholder="League of Legends, Lethal Company..."  onChange={onChange} value={values.title} />

                <label htmlFor="genre">Genre:</label>
                <input type="text" name="genre" id="genre" placeholder="Horror, Action..." onChange={onChange} value={values.genre}/>

                <label htmlFor="imageUrl">Image:</label>
                <input type="text" name="imageUrl" id="imageUrl" placeholder="http://..." onChange={onChange} value={values.imageUrl}/>

                <label htmlFor="description">Description:</label>
                <textarea name="description" id="description" rows="3" cols="50" placeholder="It is most enjoyable with friends..." onChange={onChange} value={values.description}></textarea>

                <label htmlFor="price">Price:</label>
                <input type="number" name="price" id="price" onChange={onChange} value={values.price}/>

                <div className={style.createSubmit}>
                    <input className={style.btnSubmit} type="submit" value="Create" />
                </div>
        
            </div>
        </form>
    </div>
    )
}