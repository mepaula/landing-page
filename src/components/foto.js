import Style from "./foto.module.css";

function Foto( props )
{
    return(
        <figure className={Style.foto}>
            <img src={props.foto} alt=""/>
        </figure>
    );
}

export default Foto;