import { useContext } from "react";
import * as style from "./Profile.module.css"
import AuthContext from "../../../../contexts/authContext";

export default function Profile() {
    const {
        username,
        email,
    } = useContext(AuthContext);

    return(
        <>
        <div id="profile-div" className={style.profileDiv}>
            <div className={style.profileContainer}>

            <div className={style.profileTitle}>Profile</div>
                <div className={style.profileContent}>
                    <img src="https://i.pinimg.com/736x/4e/55/a5/4e55a5a5daa42b97dce7856b9ecb6502.jpg" alt="Profile Image" className={style.profileImg}/>
                    <div className={style.profileValue}>
                    <label>Username : {username}</label>
                    <label>Email : {email}</label>
                    </div>
                </div>

            </div>
    </div>
        
        <div className={style.productsTitle}>My Games:</div>
        <div className={style.productsDiv}>
        <div className="product-item">
                <img src="account.jpg" alt="Product 1" />
                <h3>Product 1</h3>
                <p>Description of Product 1.</p>
                <button className="product-button">Details</button>
            </div>
        
        </div>
        
        <div className={style.productsTitle}>Bought Games:</div>
        <div className={style.productsDiv}>
        
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