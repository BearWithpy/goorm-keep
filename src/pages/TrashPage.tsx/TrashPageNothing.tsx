import React from "react"

import styles from "pages/styles/pagenothing.module.css"

const TrashPageNothing = () => {
    return (
        <>
            <span className={`material-symbols-outlined ${styles.nothingIcon}`}>
                delete
            </span>
            <div>휴지통에 메모가 없습니다.</div>
        </>
    )
}

export default TrashPageNothing
