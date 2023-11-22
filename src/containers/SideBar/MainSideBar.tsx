import useMenuStore from "apps/menuStore"
import useModalStore from "apps/modalStore"
import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, MenuItem, Sidebar, sidebarClasses } from "react-pro-sidebar"

import { v4 as getId } from "uuid"

import useBarStore from "apps/sidebarStore"
import PageType from "models/pageType"
import getIconComponent from "utils/getIcon"

const MainSideBar = () => {
    const { pageList, addLabelPage } = useMenuStore()
    const { openModal } = useModalStore()
    const location = useLocation()

    const { isMouseOpen, isBarOpen, toggleBar, setCurrentPage } = useBarStore()

    return (
        <div>
            <Sidebar
                collapsed={isBarOpen}
                style={{ height: "91vh", position: "absolute" }}
                rootStyles={{
                    [`.${sidebarClasses.container}`]: {
                        backgroundColor: "#fff",
                    },
                    [`.${sidebarClasses.root}`]: {},
                }}
            >
                <Menu
                    onMouseEnter={() => {
                        if (isBarOpen) {
                            setTimeout(toggleBar, 400)
                        }
                    }}
                    onMouseLeave={() => {
                        if (!isBarOpen && !isMouseOpen) {
                            setTimeout(toggleBar, 400)
                        }
                    }}
                >
                    {pageList.map((page) => {
                        if (page.name === "edit") {
                            return (
                                <MenuItem
                                    key={page.id}
                                    icon={getIconComponent(page.type)}
                                    active={true}
                                    component={
                                        <Link
                                            key={page.id}
                                            onClick={openModal}
                                            to={location.pathname}
                                        />
                                    }
                                >
                                    {page.name} label
                                </MenuItem>
                            )
                        } else {
                            return (
                                <MenuItem
                                    key={page.id}
                                    icon={getIconComponent(page.type)}
                                    active={true}
                                    component={
                                        <Link
                                            key={page.id}
                                            onClick={() => setCurrentPage(page)}
                                            to={page.path}
                                        />
                                    }
                                >
                                    {page.name}
                                </MenuItem>
                            )
                        }
                    })}
                </Menu>
            </Sidebar>
        </div>
    )
}

export default MainSideBar
