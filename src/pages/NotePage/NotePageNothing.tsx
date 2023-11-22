import React, { useState } from "react"

import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined"
import styles from "pages/styles/pagenothing.module.css"
import useBarStore from "apps/sidebarStore"
import CreateNoteButton from "components/Button/CreateNoteButton/CreateNoteButton"
import CreateNoteField from "components/CreateNoteField/CreateNoteField"
import useNoteStore from "apps/noteStore"

const NotePageNothing = () => {
    // const [textfieldMode, setTextFieldMode] = useState(false)

    const { textfieldMode } = useNoteStore()

    return (
        <div className={styles.content_box}>
            <div>
                {textfieldMode ? <CreateNoteField /> : <CreateNoteButton />}
            </div>

            <LightbulbOutlinedIcon
                style={{ width: "350px", height: "350px" }}
                className={styles.nothingIconMui}
            />
            <div className={styles.description}>
                추가한 메모가 여기에 표시됩니다.
            </div>
        </div>
    )
}

export default NotePageNothing
