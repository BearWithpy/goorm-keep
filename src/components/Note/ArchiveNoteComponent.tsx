import React from "react"
import useNoteStore from "apps/noteStore"
import Note from "models/note"

interface ArcNoteProps {
    note: Note
}

const ArchiveNoteComponent = ({ note }: ArcNoteProps) => {
    const { restoreToNoteListFromArchive, addtoTrash } = useNoteStore()

    return (
        <>
            <>
                {note.id} - {note.title} - {note.content} -{" "}
                {note.updatedAt.toDateString()}
                {note.labelId}
            </>

            <button onClick={() => restoreToNoteListFromArchive(note.id)}>
                unarchive
            </button>
            <button onClick={() => addtoTrash(note.id)}>delete</button>
        </>
    )
}

export default ArchiveNoteComponent
