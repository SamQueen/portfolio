import './projectSection.css';

function ProjectSection() {
    return (
        <section className='project-section-container'>
            <h1 id="title">Projects</h1>

            <div class="gallery">
                
                <div className='project'>
                    <div className='project-img-container'>
                        <img src="projects/veriloot.JPG"></img>
                    </div>

                    <div className='project-info-container'>
                        <h3>Veriloot</h3>
                        <p>A fictional local marketplace company. This web application was created using react.</p>
                        <p>Button</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ProjectSection;