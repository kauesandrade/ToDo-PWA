import { useEffect, useMemo, useState } from 'react'
import './App.css'

import CardProduto from "./components/card"



function App() {

  const [nomeProduto, setNomeProduto] = useState("");
  const [quantidadeProduto, setQuantidadeProduto] = useState("");
  const [listaProdutos, setListaProdutos] = useState([]);

  useEffect(() => {
    if(JSON.parse(localStorage.getItem("ListaProdutos")) != null){
      setListaProdutos(JSON.parse(localStorage.getItem("ListaProdutos")))
    }
  }, [])

  function excluirProduto(id) {
    const produtosNovo = [...listaProdutos]
    produtosNovo.splice(id, 1);
    setListaProdutos(produtosNovo)
    localStorage.setItem("ListaProdutos", JSON.stringify(produtosNovo));
  }

  const criarProduto = () => {
    if (nomeProduto != "" && quantidadeProduto != 0) {
      const produto = { nome: nomeProduto, quantidade: quantidadeProduto }
      const produtosNovo = [...listaProdutos]
      produtosNovo.push(produto)
      setListaProdutos(produtosNovo)
      localStorage.setItem("ListaProdutos", JSON.stringify(produtosNovo));
      setNomeProduto("")
      setQuantidadeProduto("")
    }
  }

  const mostrarProdutos = useMemo(() => {
    return (
      listaProdutos.map((lista, key) => {
        return (
          <CardProduto key={key}
            id={key}
            nome={lista.nome}
            quantidade={lista.quantidade}
            excluirProduto={excluirProduto}
          />)
      }))
  }, [listaProdutos])

  return (
    <>
      <section className='sectionAddProduto'>
        <h2>
          Lista Produtos
        </h2>
        <div className='divCardAdd'>
          <div className='divInput'>
            <label>Name: </label>
            <input className='input' type="text" name="name" placeholder='Nome: ' value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)} />
          </div>
          <div className='divInput'>
            <label>Quantidade: </label>
            <input className='input' type="number" name="name" placeholder='Quantidade: ' value={quantidadeProduto} onChange={(e) => setQuantidadeProduto(e.target.value)} />
          </div>
          <button className='buttonCadastrar' onClick={() => criarProduto()}>Cadastrar Produto</button>
        </div>
      </section>
      <section>
        <h3>Produtos</h3>
        <div>
          {mostrarProdutos}
        </div>
      </section>
    </>
  )
}

export default App
