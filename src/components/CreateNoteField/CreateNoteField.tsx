import React, { useState } from "react"

import { Editor } from "primereact/editor"
import { Button as ButtonPrime } from "primereact/button"

import styles from "./createnotefield.module.css"
import useNoteStore from "apps/noteStore"
import { TextField } from "@mui/material"

const CreateNoteField = () => {
    const [text, setText] = useState<string | null>("")
    const [title, setTitle] = useState<string | null>("")
    const { togglefieldMode } = useNoteStore()
    return (
        <div>
            <div className={styles.editor_container}>
                <TextField
                    id="standard-required"
                    variant="standard"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Note title"
                    style={{
                        marginBottom: "10px",
                        width: "99%",
                    }}
                />
                <Editor
                    value={text!}
                    onTextChange={(e) => setText(e.htmlValue)}
                    style={{
                        textAlign: "center",
                        height: "320px",
                    }}
                />
                <div className={styles.editor_save_button_container}>
                    <ButtonPrime
                        onClick={togglefieldMode}
                        type="submit"
                        label="Save"
                        className={styles.editor_save_button}
                    />
                </div>
            </div>
        </div>
    )
}

export default CreateNoteField
