import "../Styles/ContactSection.css"
import ContactItem from "./ContactItem"

export default function ContactSection(props) {
    const contacts = [
        { url: "https://www.linkedin.com/in/guilhermetaliberti", src: "/assets/linkedinLogo.png", alt: "logo linkedin"},
      ];
    
    return (
        <section className="contactsection">
            <h1 className="title">
                {props.title}
            </h1>
            {contacts.map((contact, index) => (
                <ContactItem key={index} url={contact.url} src={contact.src} alt={contact.src}/>
            ))
            }
        </section>
    )
}