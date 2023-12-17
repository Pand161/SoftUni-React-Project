import { useState } from "react"
import style from "./Create.module.css"

const initialState = {
    title: '',
    genre: '',
    imageUrl: '',
    description: '',
    price: '',
}

export default function CreateGame() {

    const [state, setState] = useState(initialState);

    function onChange(e) {
        e.preventDefault()

        setState({
            ...state,
            [e.currentTarget.name]: e.currentTarget.value,
        })
    }

    return(
        <div id="create-form" className={style.createForm}>
        <form id="create">
            <div className={style.createContainer}>

            <div className={style.createTitle}>Create New Game Offer</div>

                <label htmlFor="title">Name of the Game:</label>
                <input type="text" id="title" name="title" placeholder="League of Legends, Lethal Company..."  onChange={onChange} value={state.title} />

                <label htmlFor="genre">Genre:</label>
                <input type="text" name="genre" id="genre" placeholder="Horror, Action..." onChange={onChange} value={state.genre}/>

                <label htmlFor="imageUrl">Image:</label>
                <input type="text" name="imageUrl" id="imageUrl" placeholder="http://..." onChange={onChange} value={state.imageUrl}/>

                <label htmlFor="description">Description:</label>
                <input type="text" name="description" id="description" placeholder="It is most enjoyable with friends..." onChange={onChange} value={state.description}/>

                <label htmlFor="price">Price:</label>
                <input type="number" name="price" id="price" onChange={onChange} value={state.price}/>

                <div className={style.createSubmit}>
                    <input className={style.btnSubmit} type="submit" value="Create" />
                </div>
        
            </div>
        </form>
    </div>
    )
}