import { motion } from 'framer-motion';
import './projectSection.css';

/* initial={{x: "-400px"}}
whileInView={{x: "0"}}
viewport={{ once: true, amount: 0.8}} */

function ProjectSection() {
    return (
        <section id='project-section' className='project-section-container'>
            <h1 id="title">Projects</h1>

            <div className="gallery">
                
                <div className='project'>

                    <motion.div 
                        className='project-img-container'
                        initial={{x: "-200px", opacity: 0}}
                        whileInView={{x: "0", opacity: 1}}
                        viewport={{ once: true, amount: 0.8}}
                    >
                        <img src="projects/veriloot.JPG"></img>
                    </motion.div>

                    <motion.div 
                        className='project-info-container'
                        initial={{x: "200px", opacity: 0}}
                        whileInView={{x: "0", opacity: 1}}
                        viewport={{ once: true, amount: 0.8}}
                    >
                        <h3>Veriloot</h3>
                        <p>A fictional local marketplace company. This web application was created using react.</p>
                        <span id="project-btn">Demo</span>
                    </motion.div>
                </div>

                <div className='project'>

                    <motion.div 
                        className='project-info-container'
                        initial={{x: "-200px", opacity: 0}}
                        whileInView={{x: "0", opacity: 1}}
                        viewport={{ once: true, amount: 0.8}}
                    >
                        <h3>Veriloot</h3>
                        <p>A fictional local marketplace company. This web application was created using react.</p>
                        <span id="project-btn">Demo</span>
                    </motion.div>
                    
                    <motion.div 
                        className='project-img-container'
                        initial={{x: "200px", opacity: 0}}
                        whileInView={{x: "0", opacity: 1}}
                        viewport={{ once: true, amount: 0.8}}
                    >
                        <img src="projects/veriloot.JPG"></img>
                    </motion.div>

                </div>
                <div className='project'>

                    <motion.div 
                        className='project-img-container'
                        initial={{x: "-200px", opacity: 0}}
                        whileInView={{x: "0", opacity: 1}}
                        viewport={{ once: true, amount: 0.8}}
                    >
                        <img src="projects/veriloot.JPG"></img>
                    </motion.div>

                    <motion.div 
                        className='project-info-container'
                        initial={{x: "200px", opacity: 0}}
                        whileInView={{x: "0", opacity: 1}}
                        viewport={{ once: true, amount: 0.8}}
                    >
                        <h3>Veriloot</h3>
                        <p>A fictional local marketplace company. This web application was created using react.</p>
                        <span id="project-btn">Demo</span>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}

export default ProjectSection;