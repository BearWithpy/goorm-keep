import React, { useState } from "react"

import "./App.css"

import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import useMenuStore from "apps/menuStore"

import EditLabelModal from "modal/EditLabelModal"
import useModalStore from "apps/modalStore"
import NotePage from "pages/NotePage/NotePageNothing"
import NoticePage from "pages/NoticePage/NoticePageNothing"
import ArchivePage from "pages/ArchivePage/ArchivePageNothing"
import TrashPage from "pages/TrashPage.tsx/TrashPageNothing"
import LabelDetailPage from "pages/LabelPage/LabelDetailPageNothing"
import SideBar from "containers/SideBar/SideBar"

function App() {
    const { pageList, addLabelPage } = useMenuStore()

    const [labelName, setLabelName] = useState("")

    const handleAddLabel = () => {
        addLabelPage(labelName)
        setLabelName("")
    }

    return (
        <BrowserRouter>
            <SideBar />
            <EditLabelModal />
            <input
                type="text"
                value={labelName}
                onChange={(e) => setLabelName(e.target.value)}
                placeholder="Enter label name"
            />
            <button onClick={handleAddLabel}>Add Label</button>
            <Routes>
                <Route path="/" element={<NotePage />} />
                <Route path="/notice" element={<NoticePage />} />
                {/* <Route path="/edit" element={<EditPage />} /> */}
                <Route path="/archive" element={<ArchivePage />} />
                <Route path="/trash" element={<TrashPage />} />
                <Route path="/label" element={<LabelDetailPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
