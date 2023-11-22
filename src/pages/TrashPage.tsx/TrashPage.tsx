import React from "react"
import useNoteStore from "apps/noteStore"
import TrashPageNothing from "./TrashPageNothing"
import TrashNoteComponent from "components/Note/TrashNoteComponent"

const TrashPage = () => {
    const { trashList, clearTrashBin } = useNoteStore()
    return (
        <div>
            {trashList.length === 0 ? (
                <TrashPageNothing />
            ) : (
                <>
                    <button onClick={() => clearTrashBin()}></button>
                    <ul>
                        {trashList.map((note) => (
                            <li key={note.id}>
                                <TrashNoteComponent note={note} />
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}

export default TrashPage
