import Style from "./sobre.module.css";

function Sobre( props )
{
    return(
        <section className={Style.Sobre}>
            <h2></h2>
            {props.children}
            <span className={Style.SobreTecnologias}>{props.tecnologias}</span>
        </section>
    );
}

export default Sobre;