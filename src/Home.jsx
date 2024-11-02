import Notepad from "./Notepad";
import './Home.css'

function Home(){

    return (
        <>
            <div className="row-container">

                
                <div className="row" id="row-one">
                    <div className="brief-intro">
                        <Notepad title="brief-intro.txt">
                            <h1>Hi, I'm Dre</h1>
                            <h2 style={{marginTop: "-1rem"}}>a backend software developer and undergraduate CS student</h2>
                        </Notepad>
                    </div>
                </div>

                <div className="row" id="row-two">

                    <div className="experience-pad">
                        <Notepad title="experience.txt">
                            <h1>Work Experience</h1>
                            <p style={{marginTop: "-3%"}}>
                                . <br/>
                                ├── Phonebook/<br/>
                                │   ├── - Lead backend engineer and system architect<br/>
                                │   ├── - Utilized AWS to develop seamless and efficient serverless systems<br/>
                                │   └── - Product demo here: <a href="https://www.youtube.com/watch?v=nFeXtMm_Nc0">phonebook-product-demo.mp4</a><br/>
                                │<br/>
                                └── PB&A Inc./<br/>
                                    ├── - Developed software solutions to improve company-wide productivity<br/>
                                    └── - Projects utilized services such as AWS Lambda, S3, API Gateway, as well as API integration<br/>
                            </p>
                        </Notepad>
                    </div>

                    <div className="link-pad">
                        <Notepad title="links.txt">
                            <h1>Related Links</h1>
                            <ul>
                                <li>
                                    <a href="https://github.com/drecrash">GitHub</a>
                                </li>
                                <li>
                                    <a href="www.linkedin.com/in/andre-prakash-025b4b275www.linkedin.com/in/andre-prakash-025b4b275">LinkedIn</a>
                                </li>
                            </ul>
                        </Notepad>
                    </div>
                </div>


                <div className="row" id="row-three">


                    <div className="skills-pad">
                        <Notepad title="skills.txt">
                            <h1>Skills</h1>
                            <ul>
                            <li>
                                Python [4yr]
                            </li>
                            <li>
                                Amazon Web Services [1yr]
                                <ul>
                                    <li>Lambda</li>
                                    <li>API Gateway</li>
                                    <li>DynamoDB</li>
                                    <li>S3</li>
                                </ul>
                            </li>

                            <li>
                                C++ [1yr]
                            </li>

                            
                        </ul>
                        </Notepad>
                    </div>

                    <div className="contact-pad">
                        <Notepad title="contact-me.txt">
                            <h1>Contact Me</h1>
                            <h2>Open to any client work!</h2>
                            <ul>
                            <li>
                                Email: <b>dredude360@gmail.com</b>
                            </li>
                            <li>
                                Discord: <b>@drecrash</b>
                            </li>
                            
                        </ul>
                        </Notepad>
                    </div>
                    
                </div>

            </div>

        
        
        </>
    )

}

export default Home