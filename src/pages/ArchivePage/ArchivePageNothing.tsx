import React from "react"

import styles from "pages/styles/pagenothing.module.css"

const ArchivePageNothing = () => {
    return (
        <>
            <span className={`material-symbols-outlined ${styles.nothingIcon}`}>
                archive
            </span>
            <div>보관처리된 메모가 여기에 표시됩니다.</div>
        </>
    )
}

export default ArchivePageNothing
