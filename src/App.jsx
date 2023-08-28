import { Home } from "./Home";
import { Sidebar } from "./Sidebar";
import { Modal } from "./Modal";
import "./index.css";
import { useAppContext } from "./Context";

const App = () => {
  const { stateStatus } = useAppContext();
  console.log(stateStatus);
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
};
export default App;
