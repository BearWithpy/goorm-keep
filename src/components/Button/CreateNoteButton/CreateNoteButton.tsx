import React from "react"

import styles from "./createnotebutton.module.css"
import useNoteStore from "apps/noteStore"

const CreateNoteButton = () => {
    const { togglefieldMode } = useNoteStore()
    return (
        <div>
            <button
                className={styles.create_note_button}
                onClick={togglefieldMode}
            >
                <div className={styles.create_note_button_text}>
                    메모 작성...
                </div>
            </button>
        </div>
    )
}

export default CreateNoteButton
