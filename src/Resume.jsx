import { useEffect } from "react";

function Resume() {

    useEffect(()=>{
        const resumeBtn = document.querySelectorAll('.resume-btn')

    resumeBtn.forEach((btn,idx)=>{
    btn.addEventListener('click', () => {
        const resumeDetail = document.querySelectorAll('.resume-detail');

        resumeBtn.forEach(btn => {
            btn.classList.remove('active')
        })
        btn.classList.add('active')

        resumeDetail.forEach(detail => {
            detail.classList.remove('active')
            })
        resumeDetail[idx].classList.add('active')
    })

})
    })

    return (
        <>
            <section className="resume three container">
                <div className="row  w-100">
                    <div className="col-lg-4 col-md-6 col-sm-12 resume-btn-overall">
                        <div>
                            <h2 className="Career_Highlights">Career Highlights</h2>
                            <div className="resume-btn-list">
                                <button className="resume-btn active">Experience</button>
                                <button className="resume-btn">Education</button>
                                <button className="resume-btn">Skills</button>
                                <button className="resume-btn">About Me</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-12">
                        <div className="resume-box">
                            <div className="resume-detail experience active">
                                <h2>My <span>Internship</span></h2>
                                <p>I developed my skills while working with these companies, gaining hands-on experience and expertise. Each opportunity helped me refine my abilities, adapt to new technologies, and grow professionally.</p>
                                <div className="resume-list" >
                                    <div className="resume-item">
                                        <h6>2024-present</h6>
                                        <h3>Java FullStack Development</h3>
                                        <ul>
                                            <li>I5 Technologeies</li>
                                        </ul>
                                        <p>Develop and maintained web application using Java, Spring Boot. Worked on frontend technologies including React.js, HTML, CSS, and JavaScript.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="resume-detail education">
                                <h2>My <span>Education</span> </h2>
                                <p>Start my school and college journey with excitement, balancing fun and academics. Set clear career goals, focusing on building knowledge and skills. Stay organized and manage my time effectively for personal growth and success.</p>
                                <div className="resume-list">
                                    <div className="resume-item">
                                        <h6>2021-2024</h6>
                                        <h3>B.C.A</h3>
                                        <ul>
                                            <li>Government Arts and Science College, Perumbakkam.</li>
                                        </ul>
                                    </div>
                                    <div className=" resume-item">
                                        <h6>2019-2021</h6>
                                        <h3>HSC</h3>
                                        <ul>
                                            <li>Government Higher Secondary School, Vengapakkam.</li>
                                        </ul>
                                    </div>
                                    <div className=" resume-item">
                                        <h6>2018-2019</h6>
                                        <h3>SSLC</h3>
                                        <ul>
                                            <li>V.S Matriculation Higher Secondary School, Thirukalukundram.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="resume-detail skills">
                                <h2>My <span>Skills</span> </h2>
                                <p>Iam learning these skills to build a full-stack, scalbe project. this includes mastering front-end and back-end technologies. Additionally, Im's focusing on version control with Git.</p>
                                <div className="resume-list">
                                    <div className="row gap-3 d-flex justify-content-center align-items-center">
                                    <div className="resume-item col-3">
                                            <img src="html-2.png" alt="" />
                                            <span>HTML5</span>
                                        </div>
                                        <div className="resume-item col-3">
                                        <img src="css-2.png" alt="" />
                                            <span>CSS3</span>
                                        </div>
                                        <div className="resume-item col-3">
                                             <img src="javascriptmain-2.png" alt="" />
                                            <span>JavsScript</span>
                                        </div>
                                        <div className="resume-item col-3">
                                            <img src="bootstrap-2.png" className="bootstrap" alt="" />
                                            <span>Bootstrap</span>
                                        </div>
                                        <div className="resume-item col-3">
                                            <img src="logo192.png" alt="" />
                                            <span>Reacj.js</span>
                                        </div>
                                        <div className="resume-item col-3 text">
                                            <img src="json-2.png" alt="" />
                                            <span>Json</span>
                                        </div>
                                        <div className="resume-item col-3">
                                           <img src="java-3.png" className="java" alt="" />
                                            <span>Java</span>
                                        </div>
                                        <div className="resume-item col-3 text">
                                            <img src="springboot-1.png" className="springboot" alt="" />
                                            <span>Spring Boot</span>
                                        </div>
                                        <div className="resume-item col-3 text">
                                            <img src="mysql-2.png" alt="" />
                                            <span>My sql</span>
                                        </div>
                                        <div className="resume-item col-3 text">
                                           <img src="jsp-2.png" alt="" />
                                            <span>JSP</span>
                                        </div>
                                        <div className="resume-item col-3 text">
                                            <img src="jdbc-2.png" alt="" />
                                            <span>JDBC</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                           <div className="resume-detail about">
                              <h2>About <span>Me</span></h2>
                              <div className="resume-list">
                                <div className="resume-item"><p>Name <span>Karthik k</span></p></div>
                                <div className="resume-item"><p>City<span>Thirukalukundram</span></p></div>
                                <div className="resume-item"><p>Internship<span>Aug-2024 to Present</span></p></div>
                                <div className="resume-item"><p>Phone<span>(+91) 9384114211</span></p></div>
                                <div className="resume-item"><p>Email<span>kk5035236@gmail.com</span></p></div>
                                <div className="resume-item"><p>Language<span>English, Tamil</span></p></div>
                              </div>
                         </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Resume;
