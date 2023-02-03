import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from "react-modal";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactioModalOpen, setisNewTransactioModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setisNewTransactioModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setisNewTransactioModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactioModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
        />
      <GlobalStyle />
    </>
  );
}
