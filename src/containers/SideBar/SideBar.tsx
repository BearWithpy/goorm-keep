import useMenuStore from "apps/menuStore"
import useModalStore from "apps/modalStore"
import React from "react"
import { Link, useLocation } from "react-router-dom"

const SideBar = () => {
    const { pageList, addLabelPage } = useMenuStore()
    const { openModal } = useModalStore()
    const location = useLocation()

    return (
        <div>
            {pageList.map((page) => {
                if (page.name === "edit") {
                    return (
                        <Link
                            key={page.name}
                            to={location.pathname}
                            onClick={openModal}
                        >
                            {page.name}
                            <br />
                        </Link>
                    )
                } else {
                    return (
                        <Link key={page.name} to={page.path}>
                            {page.name}
                            <br />
                        </Link>
                    )
                }
            })}
        </div>
    )
}

export default SideBar
