import "../Styles/PortifolioSection.css"
import { useGlobalState } from "./GlobalStateContext"

export default function PortifolioSection(props) {

    const {isButtonActive} = useGlobalState();

    return (
        <section id="portifolio" className={!isButtonActive? "portifoliosection" : "funportifoliosection"}>
            <h1 className="title">
                {props.title}
            </h1>
        </section>
    )
}