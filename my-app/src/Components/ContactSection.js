import "../Styles/ContactSection.css"
import ContactItem from "./ContactItem"
import { useGlobalState } from "./GlobalStateContext";

export default function ContactSection(props) {
    const contacts = [
        { url: "https://www.linkedin.com/in/guilhermetaliberti", src: "/assets/linkedinLogo.png", alt: "logo linkedin"},
        { url: "https://github.com/Talibert", src: "/assets/githubLogo.png", alt: "logo github"},
        { url: "mailto:guilhermetaliberti@gmail.com", src: "/assets/gmaillogo.png", alt: "logo gmail"},
        { url: "https://wa.me/5511984390735", src: "/assets/wpplogo.png", alt: "logo wpp"},
      ];

    const {isButtonActive} = useGlobalState();
    
    return (
        <section id="contact" className={!isButtonActive? "contactsection" : "funcontactsection"}>
            <h1 className="title">
                {props.title}
            </h1>
            <div className="contactblock">
                    {contacts.map((contact, index) => (
                    <ContactItem key={index} url={contact.url} src={contact.src} alt={contact.src}/>
                    ))}
            </div>
        </section>
    )
}