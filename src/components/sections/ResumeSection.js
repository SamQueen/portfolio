import './resumeSection.css';

function ResumeSection() {
    return(
        <div id='resume-section' className='resume-section-container'>
            <h1 id='title'>Have a look at my resume!</h1>

            <img id='resume-img' src="projects/resimg.JPG"></img>

            <div className='download-btn'>
                Download
            </div>
        </div>
    )
}

export default ResumeSection;