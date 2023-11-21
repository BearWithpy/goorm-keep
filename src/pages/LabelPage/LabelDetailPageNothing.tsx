import React from "react"

import styles from "pages/styles/pagenothing.module.css"

const LabelDetailPageNothing = () => {
    return (
        <>
            <span className={`material-symbols-outlined ${styles.nothingIcon}`}>
                label
            </span>
            <div>이 라벨이 지정된 메모가 없습니다.</div>
        </>
    )
}

export default LabelDetailPageNothing
