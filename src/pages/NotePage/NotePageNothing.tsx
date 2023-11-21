import React from "react"

import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined"
import styles from "pages/styles/pagenothing.module.css"

const NotePageNothing = () => {
    return (
        <>
            <LightbulbOutlinedIcon className={styles.nothingIcon} />
            <div>추가한 메모가 여기에 표시됩니다.</div>
        </>
    )
}

export default NotePageNothing
