import Page from "models/page"
import PageType from "models/pageType"
import { create } from "zustand"

interface MenuStore {
    pageList: Page[]
    addLabelPage: (name: string) => void
}

const useMenuStore = create<MenuStore>(
    (set): MenuStore => ({
        pageList: [
            { name: PageType.NOTES, path: "/", type: PageType.NOTES },
            {
                name: PageType.NOTICE,
                path: `/${PageType.NOTICE}`,
                type: PageType.NOTICE,
            },
            {
                name: PageType.EDIT,
                path: `/${PageType.EDIT}`,
                type: PageType.EDIT,
            },
            {
                name: PageType.ARCHIVE,
                path: `/${PageType.ARCHIVE}`,
                type: PageType.ARCHIVE,
            },
            {
                name: PageType.TRASH,
                path: `/${PageType.TRASH}`,
                type: PageType.TRASH,
            },
        ],
        addLabelPage: (name) => {
            set((state) => {
                const newPage = {
                    name: name,
                    path: `/label?name=${name}`,
                    type: PageType.LABEL,
                }

                let insertionIndex = 2
                for (let i = 0; i < state.pageList.length; i++) {
                    if (state.pageList[i].type === PageType.LABEL) {
                        insertionIndex = i + 1
                    }
                }

                const updatedPageList = [
                    ...state.pageList.slice(0, insertionIndex),
                    newPage,
                    ...state.pageList.slice(insertionIndex),
                ]

                return {
                    pageList: updatedPageList,
                }
            })
        },
    })
)

export default useMenuStore
