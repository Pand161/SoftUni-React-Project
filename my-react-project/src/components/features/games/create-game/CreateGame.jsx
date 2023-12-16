export default function CreateGame() {
    return(
        <div id="create-form" className="create-form">
        <form id="create">
            <div className="create-container">

            <div className="create-title">Create New Game Offer</div>

                <label htmlFor="name">Name of the Game:</label>
                <input type="text" id="name" name="name" placeholder="League of Legends, Lethal Company..." />

                <label htmlFor="genre">Genre:</label>
                <input type="text" name="genre" id="genre" placeholder="Horror, Action..." />

                <label htmlFor="image">Image:</label>
                <input type="text" name="image" id="image" placeholder="http://..." />

                <label htmlFor="description">Description:</label>
                <input type="text" name="description" id="description" placeholder="It is most enjoyable with friends..." />

                <label htmlFor="price">Price:</label>
                <input type="number" name="price" id="price" />

                <div className="create-submit">
                    <input className="btn-submit" type="submit" value="Create" />
                </div>
        
            </div>
        </form>
    </div>
    )
}