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
import MainSideBar from "containers/SideBar/MainSideBar"
import Header from "containers/Header/Header"
import useBarStore from "apps/sidebarStore"

function App() {
    const { pageList, addLabelPage } = useMenuStore()

    const [labelName, setLabelName] = useState("")

    const { isMouseOpen, isBarOpen, toggleBar } = useBarStore()

    const handleAddLabel = () => {
        addLabelPage(labelName)
        setLabelName("")
    }

    return (
        <BrowserRouter>
            <Header />
            <hr />
            <div
                className="app-container"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                }}
            >
                <div
                    className="sidebar"
                    style={{
                        width: isBarOpen ? "50px" : "250px",
                        transition: "width 0.3s",
                    }}
                >
                    <MainSideBar />
                </div>
                <div
                    className="main-content"
                    style={{
                        flexGrow: 1,
                        transition: "margin-left 0.3s",
                    }}
                >
                    <EditLabelModal />
                    <Routes>
                        <Route path="/" element={<NotePage />} />
                        <Route path="/notifications" element={<NoticePage />} />
                        {/* <Route path="/edit" element={<EditPage />} /> */}
                        <Route path="/archive" element={<ArchivePage />} />
                        <Route path="/delete" element={<TrashPage />} />
                        <Route path="/label" element={<LabelDetailPage />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
        // <BrowserRouter>
        //     <Header />
        //     <MainSideBar />
        //     <EditLabelModal />
        //     <input
        //         type="text"
        //         value={labelName}
        //         onChange={(e) => setLabelName(e.target.value)}
        //         placeholder="Enter label name"
        //     />
        //     <button onClick={handleAddLabel}>Add Label</button>
        //     <Routes>
        //         <Route path="/" element={<NotePage />} />
        //         <Route path="/notice" element={<NoticePage />} />
        //         {/* <Route path="/edit" element={<EditPage />} /> */}
        //         <Route path="/archive" element={<ArchivePage />} />
        //         <Route path="/delete" element={<TrashPage />} />
        //         <Route path="/label" element={<LabelDetailPage />} />
        //     </Routes>
        // </BrowserRouter>
    )
}

export default App
