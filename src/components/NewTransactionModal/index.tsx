import Modal from 'react-modal';
import closeImg from '../../assets/Vector.svg';
import incomeImg from '../../assets/Entradas.svg';
import outcomeImg from '../../assets/Saídas.svg';
import { Container, TransactionTypeContainer } from './styles';

interface newTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: newTransactionModalProps) {
    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button 
                type='button' 
                onClick={onRequestClose}
                className="react-modal-close"
                >
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container>
                <h2>Cadastrar transação</h2>

                <input 
                    placeholder='Título'
                />

                <input 
                    type="number"
                    placeholder='Valor'
                />

                <input 
                    placeholder='Categoria'
                />

                <TransactionTypeContainer>
                    <button
                        type='button'
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </button>

                    <button
                        type='button'
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>

                <button type='submit'> Cadastrar </button>
            </Container>
        </Modal>
    )
} 