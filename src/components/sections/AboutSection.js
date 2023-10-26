import './aboutSection.css';

function AboutSection() {
    return(
        <section id="about-section" className='about-section-container'>
           
            
            <h1 id="title">About Me</h1>

            <div className='typing-container'>
                <p>I'm a</p>
                
                <ul className='typing-list'>
                    <li id="type">Web Developer</li>
                    <li id="type">Full Stack Developer</li>
                    <li id="type">Software Developer</li>
                </ul>
            </div>

            <p id="paragraph">Welcome to my corner of the web! My name is Sam Queen and I am a passionate computer science student on a mission to build beautiful web applications. My role as a developer goes beyond writing lines of code; it's about turning ideas into functional websites.</p>

           
        
            <div className='tech-stack'>
                
                <div className="tech-item">
                    <img src={'tech/react.png'} />
                    <p>React</p>
                </div>

                <div className="tech-item">
                    <img src={'tech/vite.png'} />
                    <p>Vite</p>
                </div>

                <div className="tech-item">
                    <img src={'tech/next.png'} />
                    <p>Next.js</p>
                </div>

                <div className="tech-item">
                    <img src={'tech/sass.png'} />
                    <p>Sass</p>
                </div>

                <div className="tech-item">
                    <img src={'tech/jq.png'} />
                    <p>jQuery</p>
                </div>

                <div className="tech-item">
                    <img src={'tech/node.png'} />
                    <p>Node.js</p>
                </div>

                <div className="tech-item">
                    <img src={'tech/express.png'} />
                    <p>Express</p>
                </div>

                <div className="tech-item">
                    <img src={'tech/mysql.png'} />
                    <p>MySQL</p>
                </div>

                <div className="tech-item">
                    <img src={'tech/c.png'} />
                    <p>C++</p>
                </div>

                <div className="tech-item">
                    <img src={'tech/java.png'} />
                    <p>java</p>
                </div>

                <div className="tech-item">
                    <img src={'tech/python.png'} />
                    <p>python</p>
                </div>

                <div className="tech-item">
                    <img src={'tech/git.png'} />
                    <p>Git</p>
                </div>

            </div>
        </section>
    )
}

export default AboutSection;