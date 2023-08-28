import React from "react";
import { useAppContext } from "./Context";
import { FaTimes } from "react-icons/fa";

export const Modal = () => {
  const { openModal, CloseModal, stateStatus } = useAppContext();
  const { isSidebarOpen, modalOpen } = stateStatus;
  console.log(modalOpen);
  return (
    <div className={modalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <h4>Jackpot</h4>
        <button className="btn close-modal-btn" onClick={CloseModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
