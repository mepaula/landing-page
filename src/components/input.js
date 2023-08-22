import Style from "./input.module.css";

function Input( props )
{
    return(
        <div className= {Style.input}>
            <label>{props.label}</label>
            <input type= {props.tipo} placeholder= {props.place} ></input>
        </div>
    );
}

export default Input;