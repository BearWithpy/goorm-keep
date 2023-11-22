import { v4 as getId } from "uuid"

import { create } from "zustand"
import Note from "models/note"

interface NoteStore {
    noteList: Note[]
    textfieldMode: boolean
    addNote: () => void
    togglefieldMode: () => void
}

const useNoteStore = create<NoteStore>(
    (set): NoteStore => ({
        noteList: [],
        textfieldMode: false,
        addNote: () => {
            set((state) => ({}))
        },
        togglefieldMode: () =>
            set((state) => ({ textfieldMode: !state.textfieldMode })),
    })
)

export default useNoteStore
