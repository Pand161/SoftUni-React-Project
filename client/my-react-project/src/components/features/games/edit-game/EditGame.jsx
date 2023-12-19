import { useEffect, useState } from "react"
import * as style from "./EditGame.module.css"
import { useNavigate, useParams } from "react-router-dom"
import * as itemService from "../../../../services/itemService"
import useForm from "../../../../hooks/useForm"
import Path from "../../../../paths"

const initialState = {
    title: '',
    genre: '',
    imageUrl: '',
    description: '',
    price: '',
}

export default function EditGame() {
    
    const {id} = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    useEffect(() => {
        itemService.getOne(id)
        .then(console.log())
    }, [id])

    const submitHandler = (values) => {
        itemService.editItem(id, values)
        .then(() => navigate(Path.AllGames))
        .catch(err => {
            console.log(err);
        });
    }

    const titlelValidator = () => {
        if (values.title.length < 1) {
            setErrors(state => ({
                ...state,
                title: 'Title is required',
            }));
        } else {
            if (errors.title) {
                setErrors(state => ({ ...state, title: '' }));
            }
        }
    };

    const genrelValidator = () => {
        if (values.genre.length < 1) {
            setErrors(state => ({
                ...state,
                genre: 'Genre is required',
            }));
        } else {
            if (errors.genre) {
                setErrors(state => ({ ...state, genre: '' }));
            }
        }
    };

    const priceValidator = () => {
        if (Number(values.price) <= 0) {
            setErrors(state => ({
                ...state,
                price: 'Price Should be a positive number',
            }));
        } else {
            if (errors.price) {
                setErrors(state => ({ ...state, price: '' }));
            }
        }
    };

    const descriptionValidator = () => {
        if (values.description.length < 5) {
            setErrors(state => ({
                ...state,
                description: 'Description Should be Atleast 5 symbols',
            }));
        } else {
            if (errors.description) {
                setErrors(state => ({ ...state, description: '' }));
            }
        }
    };

    const imageUrlValidator = () => {
        if (values.imageUrl.length < 1) {
            setErrors(state => ({
                ...state,
                imageUrl: 'Image is required',
            }));
        } else {
            if (errors.imageUrl) {
                setErrors(state => ({ ...state, imageUrl: '' }));
            }
        }
    };

    const { values, onChange, onSubmit } = useForm(submitHandler, initialState);

    return(
        <div id="create-form" className={style.createForm}>
        <form id="create" onSubmit={onSubmit}>
            <div className={style.createContainer}>

            <div className={style.createTitle}>Edit Game Offer</div>

                <label htmlFor="title">Name of the Game:</label>
                <input type="text" id="title" name="title" placeholder="League of Legends, Lethal Company..."  onChange={onChange} onBlur={titlelValidator} value={values.title} />
                {errors.title && (
                                        <p className={style.errorMessage}>{errors.title}</p>
                                    )}

                <label htmlFor="genre">Genre:</label>
                <input type="text" name="genre" id="genre" placeholder="Horror, Action..." onChange={onChange} onBlur={genrelValidator} value={values.genre}/>
                {errors.genre && (
                                        <p className={style.errorMessage}>{errors.genre}</p>
                                    )}

                <label htmlFor="imageUrl">Image:</label>
                <input type="text" name="imageUrl" id="imageUrl" placeholder="http://..." onChange={onChange} onBlur={imageUrlValidator} value={values.imageUrl}/>
                {errors.imageUrl && (
                                        <p className={style.errorMessage}>{errors.imageUrl}</p>
                                    )}

                <label htmlFor="description">Description:</label>
                <textarea name="description" id="description" rows="3" cols="50" placeholder="It is most enjoyable with friends..." onChange={onChange} onBlur={descriptionValidator} value={values.description}></textarea>
                {errors.description && (
                                        <p className={style.errorMessage}>{errors.description}</p>
                                    )}

                <label htmlFor="price">Price:</label>
                <input type="number" name="price" id="price" onChange={onChange} onBlur={priceValidator} value={values.price}/>
                {errors.price && (
                                        <p className={style.errorMessage}>{errors.price}</p>
                                    )}

                <div className={style.createSubmit}>
                    <input className={style.btnSubmit} type="submit" disabled={(Object.values(errors).some(x => x)
                                            || (Object.values(values).some(x => x == '')))} value="Edit" />
                </div>
        
            </div>
        </form>
    </div>
    )
}