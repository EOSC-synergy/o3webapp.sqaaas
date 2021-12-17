import React, { useState } from "react";

function getAllAvailableModels() {
    return null;
}

/**
 * opens a modal where the user can add a new model group
 * @param {*} props 
 *  props.close() -> function to call if modal should be closed
 *  props.open -> boolean whether the modal should be visible
 * @returns a jsx containing a transfer list with all available models
 */
export default function AddModalGroupModal(props) {
    props.close();
    return (
        <>
            {props.open && <></>}
        </>
    );
}