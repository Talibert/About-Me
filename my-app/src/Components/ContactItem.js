import "../Styles/ContactSection.css"       
        
const ContactItem =({url, src, alt}) => {

    return(
                <a className="contactlink" href={url} target="_blank" rel="noopener noreferrer">
                    <img className="contactimage" src={src} alt={alt}></img>
                </a> 
    )
}
export default ContactItem;

        
