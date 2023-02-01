import entradasImg from '../../assets/Entradas.svg';
import saidasImg from '../../assets/Saídas.svg';
import totalImg from '../../assets/Entradas.svg';

import { Container } from "./styles";

export function Summary () {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradasImg} alt='Entradas' />
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidasImg} alt='Saídas' />
                </header>
                <strong> - R$500,00</strong>
            </div>

            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt='Total' />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    );
}