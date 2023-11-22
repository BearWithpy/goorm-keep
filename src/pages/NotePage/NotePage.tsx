import React from "react"
import useNoteStore from "apps/noteStore"
import NotePageNothing from "./NotePageNothing"

import styles from "pages/styles/pagenothing.module.css"
import CreateNoteField from "components/CreateNoteField/CreateNoteField"
import CreateNoteButton from "components/Button/CreateNoteButton/CreateNoteButton"
import NoteComponent from "components/Note/NoteComponent"

const NotePage = () => {
    const { noteList } = useNoteStore()
    const { textfieldMode } = useNoteStore()

    const pinnedNotes = noteList.filter((note) => note.pinned)
    const otherNotes = noteList.filter((note) => !note.pinned)

    return (
        <div>
            <div className={styles.content_box}>
                <div>
                    {textfieldMode ? <CreateNoteField /> : <CreateNoteButton />}
                </div>
            </div>
            {noteList.length === 0 ? (
                <NotePageNothing />
            ) : pinnedNotes.length === 0 ? (
                <div>
                    <ul>
                        {noteList.map((note) => (
                            <li key={note.id}>
                                <NoteComponent note={note} />
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div>
                    <h2>FIXED</h2>
                    <ul>
                        {pinnedNotes.map((note) => (
                            <li key={note.id}>
                                <NoteComponent note={note} />
                            </li>
                        ))}
                    </ul>
                    <h2>ETC</h2>
                    <ul>
                        {otherNotes.map((note) => (
                            <li key={note.id}>
                                <NoteComponent note={note} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default NotePage
