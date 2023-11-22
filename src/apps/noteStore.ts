import { create } from "zustand"
import Note from "models/note"

interface NoteStore {
    noteList: Note[]
    archiveList: Note[]
    trashList: Note[]
    currentLabel: string[]
    textfieldMode: boolean
    addNote: (newNote: Note) => void
    togglePinned: (id: string) => void
    addLabelsToNote: (label: string) => void
    deleteLabelsFromNote: (label: string) => void
    togglefieldMode: () => void
    clearCurrentLabel: () => void
    clearTrashBin: () => void
    addtoArchive: (id: string) => void
    addtoTrash: (id: string) => void
    restoreToNoteListFromTrash: (id: string) => void
    restoreToNoteListFromArchive: (id: string) => void
    editLabelInNotes: (oldLabel: string, newLabel: string) => void
    deleteOneFromTrash: (id: string) => void
}

const useNoteStore = create<NoteStore>(
    (set): NoteStore => ({
        noteList: [],
        currentLabel: [],
        archiveList: [],
        trashList: [],
        textfieldMode: false,
        addtoArchive: (id) => {
            set((state) => ({
                archiveList: [
                    ...state.archiveList,
                    ...state.noteList.filter((note) => note.id === id),
                ],
                noteList: state.noteList.filter((note) => note.id !== id),
            }))
        },
        addtoTrash: (id) => {
            set((state) => ({
                trashList: [
                    ...state.trashList,
                    ...state.noteList.filter((note) => note.id === id),
                    ...state.archiveList.filter((note) => note.id === id),
                ],
                noteList: state.noteList.filter((note) => note.id !== id),
                archiveList: state.archiveList.filter((note) => note.id !== id),
            }))
        },
        deleteOneFromTrash: (id) => {
            set((state) => ({
                trashList: state.trashList.filter((note) => note.id !== id),
            }))
        },
        restoreToNoteListFromTrash: (id) => {
            set((state) => ({
                noteList: [
                    ...state.noteList,
                    ...state.trashList.filter((note) => note.id === id),
                ],
                trashList: state.trashList.filter((note) => note.id !== id),
            }))
        },

        restoreToNoteListFromArchive: (id) => {
            set((state) => ({
                noteList: [
                    ...state.noteList,
                    ...state.archiveList.filter((note) => note.id === id),
                ],
                archiveList: state.archiveList.filter((note) => note.id !== id),
            }))
        },
        clearTrashBin: () => {
            set(() => ({
                trashList: [],
            }))
        },
        addNote: (newNote) => {
            set((state) => ({
                noteList: [...state.noteList, newNote],
            }))
        },
        togglePinned: (id) => {
            set((state) => ({
                noteList: state.noteList.map((note) =>
                    note.id === id ? { ...note, pinned: !note.pinned } : note
                ),
            }))
        },
        addLabelsToNote: (label) => {
            set((state) => ({
                currentLabel: [...state.currentLabel, label],
            }))
        },
        deleteLabelsFromNote: (label) => {
            set((state) => ({
                currentLabel: state.currentLabel.filter((lb) => lb !== label),
            }))
        },
        clearCurrentLabel: () => {
            set(() => ({
                currentLabel: [],
            }))
        },
        togglefieldMode: () =>
            set((state) => ({ textfieldMode: !state.textfieldMode })),
        editLabelInNotes: (oldLabel, newLabel) => {
            set((state) => ({
                noteList: state.noteList.map((note) => ({
                    ...note,
                    labelId: note.labelId.map((label) =>
                        label === oldLabel ? newLabel : label
                    ),
                })),
            }))
        },
    })
)

export default useNoteStore
