import Style from "./foto2.module.css";

function Foto2( props )
{
    return(
        <figure className={Style.foto2}>
            <img src={props.foto2} alt=""/>
        </figure>
    );
}

export default Foto2;