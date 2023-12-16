import { Link } from "react-router-dom"

export default function Home() {
    
    return(
        <div className="home-content">
                <h1>Welcome to Game Bazaar</h1>
                <p>Most affordable prices for the Games you love to play, <br /> We are in Top 3 most popular Marketplaces these Days! </p>
                <div>
                    <Link to={"/all-games"} ><button type="button" className="home-button"><span></span>ENTER</button></Link>
                </div>

                <h2>Our Latest Offers!</h2>

                <div className="product-container">
            <div className="product-item">
                <img src="account.jpg" alt="Product 1" />
                <h3>Product 1</h3>
                <p>Description of Product 1.</p>
                <button className="product-button">Details</button>
            </div>
            <div className="product-item">
                <img src="account2.jpg" alt="Product 2" />
                <h3>20 Characters max</h3>
                <p>35 characters max</p>
                <button className="product-button">Details</button>
            </div>
            <div className="product-item">
                <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1966720/capsule_616x353.jpg?t=1700231592" alt="Product 3" />
                <h3>Lethal Company</h3>
                <p>Fun to play with friends</p>
                <button className="product-button">Details</button>
            </div>


        </div>
            </div>

            
    )
}