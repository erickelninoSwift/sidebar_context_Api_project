import React from "react";
import { useAppContext } from "./Context";
import { FaBars } from "react-icons/fa";
import "./index.css";

export const Home = () => {
  const { openSidebar, openModal } = useAppContext();

  return (
    <main>
      <button type="button" className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button type="button" className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
};
