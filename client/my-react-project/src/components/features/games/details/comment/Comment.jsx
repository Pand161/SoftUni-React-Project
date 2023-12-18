import * as style from "./Comment.module.css"

export default function Comment({text,username}) {
    

    return(
        <div className={style.container}>
            <div className={style.text}>{username} : {text}</div>
        </div>
    )
}