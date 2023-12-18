import * as style from "./Details.module.css";

export default function Details() {


    return(
        <div id="details-div" className={style.detailsDiv}>
            <div className={style.detailsContainer}>
                <div className={style.detailsTitle}>Details</div>
                <img src="https://i.pinimg.com/736x/4e/55/a5/4e55a5a5daa42b97dce7856b9ecb6502.jpg" alt="Profile Image" className={style.profileImg}/>
                <div className={style.detailsContent}>
                <label>Username : Eron77</label>
                <label>Email : Eron77@gmail.com</label>
                </div>
            </div>
    </div>
    )
}