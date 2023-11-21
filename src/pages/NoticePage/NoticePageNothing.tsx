import React from "react"

import styles from "pages/styles/pagenothing.module.css"

const NoticePageNothing = () => {
    return (
        <>
            <span className={`material-symbols-outlined ${styles.nothingIcon}`}>
                notifications
            </span>
            <div>예정된 알림의 메모가 여기에 표시됩니다.</div>
        </>
    )
}

export default NoticePageNothing
