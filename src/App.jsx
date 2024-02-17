import { useEffect, useMemo, useState } from 'react'
import './App.css'

import CardProduto from "./components/card"



function App() {

  const [nomeProduto, setNomeProduto] = useState("");
  const [quantidadeProduto, setQuantidadeProduto] = useState(0);
  const [listaProdutos, setListaProdutos] = useState([{ nome: "leticia", quantidade: 1 }, { nome: "kaue", quantidade: 2 }, { nome: "arthur", quantidade: 3 }]);

  function excluirProduto (id){
    const produtosNovo = listaProdutos
    produtosNovo.splice(id, 1);
    setListaProdutos(produtosNovo)
    console.log(produtosNovo)
    localStorage.setItem("ListaProdutos", JSON.stringify(listaProdutos));
    // setAsyncStorage();
    // getTasks();
  }

  const criarProduto = () =>{
    if(nomeProduto != "" && quantidadeProduto != 0){
      const produto = {
        nome: {nomeProduto},
        quantidade: {quantidadeProduto}
      }
      listaProdutos.push(produto)
      localStorage.setItem("ListaProdutos", JSON.stringify(listaProdutos));
      setNomeProduto("")
      setQuantidadeProduto(0)
    }
  }

  const mostrarProdutos = useMemo(() =>{
    return(
          listaProdutos.map((lista, key) => {
            return (
              <CardProduto key={key}
                id = {key}
                nome={lista.nome}
                quantidade={lista.quantidade} 
                excluirProduto = {excluirProduto}
                />)
          }))
  })

  return (
    <>
      <section>
        <h2>
          Lista Produtos
        </h2>
        <div>
          <div>
            <p>Name: </p>
            <input type="text" name="name" placeholder='Nome: ' value={nomeProduto} onChange={(e)=> setNomeProduto(e.target.value)}/>
          </div>
          <div>
            <p>Quantidade: </p>
            <input type="number" name="name" placeholder='Quantidade: ' value={quantidadeProduto} onChange={(e)=> setQuantidadeProduto(e.target.value)}/>
          </div>
        </div>
        <button onClick={()=>criarProduto()}>Cadastrar Produto</button>
      </section>
      <section>
      <div>
        <h3>Produtos</h3>
      </div>
      {mostrarProdutos}
      </section>
    </>
  )
}

export default App
