import Cabecalho from './components/cabecalho'
import Conteudo from './components/conteudo'
import Rodape from './components/rodape'
import Mensagem from './components/Mensagem'
import './App.css'
import Topo from './components/Topo'
import Meio from './components/Meio'
import Base from './components/Base'

const nome = "Ana"
const anoNascimento = 2005


function executarAcao(){
  console.log('Função chamada com sucesso.')
}

function  renderizarMensagem(){
  return <p>Texto gerado por uma função de renderização.</p>
}

function App() {

  return (
    <>
      {/*Titulo Principal*/}
      <h1>Meu primeiro app React</h1> 
      
      {/*JSX com Template Expressions*/}
      <p>"Olá, meu nome é {nome} e nasci em {anoNascimento}."</p>

      {/*Criação e Importação de Componente*/}
      <Mensagem/>

      {/*Hierarquia de Componentes */}
      <Cabecalho/>
      <Conteudo/>
      <Rodape/>
     

      {/* Evento de Clique com Função Inline*/}
      <button onClick={() => alert('Você clicou no botão!')}>Mostrar Alerta</button>

      {/*Evento de Clique com Função Externa*/}
      <button onClick={executarAcao}>Executar Ação</button>

      {/* Função de Renderização*/}
      {renderizarMensagem()}

      {/*Layout com Múltiplos Componentes*/}
      <Topo/>
      <Meio/>
      <Base/>

    </>
  )
}

export default App
