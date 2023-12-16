export default function AllItems() {
    return(
        <>
        <h1 className="products-title">You Can Enjoy All Of Our Games Here!</h1>
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

            <div className="product-item">
                <img src="account.jpg" alt="Product 1" />
                <h3>Product 1</h3>
                <p>Description of Product 1.</p>
                <button className="product-button">Details</button>
            </div>


        </div>
        </>
    )
}