import "./components/global.css";
import Menu from './components/menu';
import Sobre from './components/sobre'; 
import Formulario from "./components/formulario";
import Botao from "./components/botao";
import Foto1 from "./components/foto1";
import Foto2 from "./components/foto2";
import img1 from './components/img/stranger-things-2.webp';
import img2 from './components/img/stranger-things-3.jpg';

function App(props) {

  return (
    <>
      <Menu></Menu>
      <div className="flex">
          <div className="cx1">
              <Foto1 foto1={img1}/>
              <Foto2 foto2={img2}/>
          </div>
          <div className="cx2">
              <Sobre tecnologias="">
                  <p>Um grupo de amigo se envolve em uma série de</p>
                  <p>eventos sobrenaturais na pacata cideade de Hawkins.</p>
                  <p>Eles enfrentam criaturas monstruosos, agencias</p>
                  <p>secretas do governo e se aventuram em dimensões paralelas.</p>
              </Sobre> 
              <Formulario />
              <Botao texto="Enviar" cor="rgb(127, 22, 22)" tamanho="160px"/>
          </div>         
      </div>
    </>
  );
}

export default App;
