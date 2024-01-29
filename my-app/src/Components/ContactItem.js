import "../Styles/ContactSection.css"       
        
const ContactItem =({url, src, alt}) => {

    return(
        <div className="contactblock">
            <div className="contactitem">
            <a className="contactlink" href={url} target="_blank" rel="noopener noreferrer">
            <img className="contactimage" src={src} alt={alt}></img>
            </a>
            </div> 
        </div>   
    )
}

export default ContactItem;

        
