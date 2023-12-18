import * as style from "./Profile.module.css"

export default function Profile() {
    return(
        <div id="profile-div" className={style.profileDiv}>
            <div className={style.profileContainer}>

            <div className={style.profileTitle}>Profile</div>
                <div className={style.profileContent}>
                    <img src="https://i.pinimg.com/736x/4e/55/a5/4e55a5a5daa42b97dce7856b9ecb6502.jpg" alt="Profile Image" className={style.profileImg}/>
                    <div className={style.profileValue}>
                    <label>Username : Eron77</label>
                    <label>Email : Eron77@gmail.com</label>
                    <div className={style.profileButtons}>
                        <button className={style.editBtn}>Edit</button>
                        <button className={style.deleteBtn}>Delete</button>
                    </div>
                    </div>

                </div>

            </div>

    </div>
    )
}