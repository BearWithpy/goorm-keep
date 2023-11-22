import React from "react"

import styles from "pages/styles/pagenothing.module.css"
import CreateNoteButton from "components/Button/CreateNoteButton/CreateNoteButton"

const LabelDetailPageNothing = () => {
    return (
        <div className={styles.content_box}>
            <CreateNoteButton />
            <span className={`material-symbols-outlined ${styles.nothingIcon}`}>
                label
            </span>
            <div className={styles.description}>
                이 라벨이 지정된 메모가 없습니다.
            </div>
        </div>
    )
}

export default LabelDetailPageNothing
