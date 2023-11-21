import { Container, Grid, IconButton } from "@mui/material"
import React from "react"

import Modal from "react-modal"

import CloseIcon from "@mui/icons-material/Close"
import { useNavigate } from "react-router-dom"
import useModalStore from "apps/modalStore"

Modal.setAppElement("#root")

const customStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
}

const EditLabelModal = () => {
    const navigate = useNavigate()
    const { isModalOpen, closeModal } = useModalStore()

    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            style={customStyles}
        >
            <IconButton onClick={closeModal}>
                <CloseIcon />
            </IconButton>
            <Container
                onMouseLeave={closeModal}
                component="main"
                maxWidth="xl"
                style={{ marginTop: "5%" }}
            >
                <Grid item xs={12} style={{ margin: "20px" }}>
                    모달모달
                </Grid>
            </Container>
        </Modal>
    )
}

export default EditLabelModal
