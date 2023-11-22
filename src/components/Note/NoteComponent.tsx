import React from "react"
import useNoteStore from "apps/noteStore"
import Note from "models/note"

interface NoteProps {
    note: Note
}

const NoteComponent = ({ note }: NoteProps) => {
    const {
        togglePinned,
        togglefieldMode,
        addtoArchive,
        addtoTrash,
        setEditingNote,
    } = useNoteStore()

    return (
        <>
            <>
                {note.id} - {note.title} - {note.content} -{" "}
                {note.updatedAt.toDateString()}
                {note.labelId}
            </>
            <button onClick={() => togglePinned(note.id)}>
                {note.pinned ? "Unpin" : "Pin"}
            </button>
            <button onClick={() => addtoArchive(note.id)}>arch</button>
            <button onClick={() => addtoTrash(note.id)}>delete</button>
            <button
                onClick={() => {
                    setEditingNote(note)
                    togglefieldMode()
                }}
            >
                edit
            </button>
        </>
    )
}

export default NoteComponent
