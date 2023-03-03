import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from "react-modal";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./TransactionsContext";

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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactioModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
        />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
