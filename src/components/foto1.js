import Style from "./foto1.module.css";

function Foto1( props )
{
    return(
        <figure className={Style.foto1}>
            <img src={props.foto1} alt=""/>
        </figure>
    );
}

export default Foto1;