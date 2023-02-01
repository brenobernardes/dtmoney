import { Container } from "./styles";

export function TransactionsTable () {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>01/02/2022</td>
                    </tr>

                    <tr>
                        <td>Compras</td>
                        <td className="withdraw">R$250,00</td>
                        <td>Compras</td>
                        <td>05/02/2022</td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">R$800,00</td>
                        <td>Despesa</td>
                        <td>01/02/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}