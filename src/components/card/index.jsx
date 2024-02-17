import './style.css'

const cardProduto = ({id, nome, quantidade, excluirProduto}) => {
    return(
    <>
    <div>
        <h3>Nome: {nome}</h3>
        <h3>Quantidade: {quantidade}</h3>
        <button onClick={() => excluirProduto(id)}>Excluir</button>
    </div>

    </>
    )
}

export default cardProduto;