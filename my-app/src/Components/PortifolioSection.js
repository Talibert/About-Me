import "../Styles/PortifolioSection.css"

export default function PortifolioSection(props) {
    return (
        <section className="portifoliosection">
            <h1 className="title">
                {props.title}
            </h1>
        </section>
    )
}