import React from "react"
import useNoteStore from "apps/noteStore"
import Note from "models/note"

interface ArcNoteProps {
    note: Note
}

const TrashNoteComponent = ({ note }: ArcNoteProps) => {
    const { restoreToNoteListFromTrash, deleteOneFromTrash } = useNoteStore()

    return (
        <>
            <>
                {note.id} - {note.title} - {note.content} -{" "}
                {note.updatedAt.toDateString()}
                {note.labelId}
            </>

            <button onClick={() => deleteOneFromTrash(note.id)}>
                delete Per
            </button>
            <button onClick={() => restoreToNoteListFromTrash(note.id)}>
                restore
            </button>
        </>
    )
}
export default TrashNoteComponent
