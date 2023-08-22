import Style from './menu.module.css';
import logo from './img/Stranger_Things_logo (1).png';
import Foto from './foto';
function menu() {
  return (
    <>
    
    <div className = {Style.MenuPrincipal}>
      <nav>
        <ul>
            <li><Foto foto={logo}/></li>  
            <li><h5>Temporadas</h5></li>
            <li><h5>Elencos</h5></li>
            <li><h5>Curiosidades</h5></li>
            <li><h5>Roupas</h5></li>
            <li><h5>Acessórios</h5></li> 
        </ul>   
      </nav>
      <div  className = {Style.MenuPrincipal}></div>
    </div>    
    </>
  );
}

export default menu;
