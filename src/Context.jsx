import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const ApplicationContext = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
    console.log("open sidebar");
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    console.log("close sidebar");
  };

  const openModal = () => {
    setModalOpen(true);
    console.log("open modal");
  };

  const CloseModal = () => {
    setModalOpen(false);
    console.log("close modal");
  };

  const stateStatus = { isSidebarOpen, modalOpen };

  return (
    <AppContext.Provider
      value={{ openSidebar, closeSidebar, openModal, CloseModal, stateStatus }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
