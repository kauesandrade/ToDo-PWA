import './style.css'
import { FaTrash } from "react-icons/fa";

const cardProduto = ({ id, nome, quantidade, excluirProduto }) => {
    return (
        <>
            <div className='divCardProduto'>
                <div className='divInformacoes'>
                    <h3 className='text'>Nome: {nome}</h3>
                    <h3 className='text'>Quantidade: {quantidade}</h3>
                </div>
                <div className='divLixeira' onClick={() => excluirProduto(id)}>
                <FaTrash className='icon'/>
                </div>
            </div>

        </>
    )
}

export default cardProduto;