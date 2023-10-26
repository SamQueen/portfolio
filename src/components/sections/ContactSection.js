import './contactSection.css';

function ContactSection() {
    return(
        <section id='contact-section' className='contact-section-container'>
            
            <h1 id='title'>Contact Me</h1>

            <div className='contact-page'>
                <p id='contact-page-title'>Send me a message🚀</p>

                <input placeholder='Name'></input>
                <br />
                <input placeholder='Email Address'></input>
                <br />
                <input placeholder='Subject'></input>

                <p id='contact-page-info'>I'd love to know about your project</p>
                <textarea ></textarea>

                <span id='contact-page-send-btn'>Send</span>
            </div>

        </section>
    )
}

export default ContactSection;