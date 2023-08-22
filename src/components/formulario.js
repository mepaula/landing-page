import Style from "./formulario.module.css";
import Input from "./input";

function Formulario( props )
{
    return(
        < div className={Style.Formulario}>
            <h3>Agora vamos responder algumas perguntas?</h3>
            <form>
                <Input tipo="texto" label="O que voce acha sobre a série?" place="Digite a sua resposta" />
                <Input tipo="email" label="Voce quer que tenha continuação?" place="Digite a sua resposta" />
                <Input tipo="texto" label="Qual temporada voce mais gostou?" place="Digite a sua resposta" />
            </form>
        </div>
    );
} 

export default Formulario;