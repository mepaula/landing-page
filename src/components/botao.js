import Style from "./botao.module.css";

function Botao( props )
{
    return(
       <button className={Style.Botao} style={{backgroundColor: props.cor , width: props.tamanho}}> {props.texto}</button>
    );
}

export default Botao;