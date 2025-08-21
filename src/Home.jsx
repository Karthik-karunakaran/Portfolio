function Home() {

    return (

        <>
            <section className="home three d-none d-lg-block d-md-block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 home-detail-main">
                            <div className="home-detail mb-5">
                                <h1>KARTHIK K</h1>
                                <h2>I'm a
                                    <span data-text="Intern JAVA Fullstack Developer" className="ms-2">Intern JAVA Fullstack Developer </span>
                                </h2>
                                <p>A recent B.C.A gradiuate with a strong academic foundation, Eager to launch a professional career in the field of technology. Proficient in HTML, CSS3, JavaScript, and Java with a solid understanding of programming principles. Committed to applying techhnical knowledge and problem-solving skills to contribue effictively in dynamic growth-oriented work environment.</p>
                                <div className="btn-sci">
                                    <a href="frontend resume.pdf" className="btn1" download="karthik">Download Resume</a>
                                    <a href="https://www.linkedin.com/in/k-karthik-201540293/" className="icon-btn"> <i class="fa-brands fa-linkedin"></i></a>
                                    <a href="https://github.com/Karthik-karunakaran" className="icon-btn"><i className="fa-brands fa-github"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
                            <div className="home-img">
                                <div className="img-box">
                                    <div className="img-item">
                                        <img src="karthik-img.png" alt="img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home three d-lg-none d-md-none d-sm-block ">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
                            <div className="home-img">
                                <div className="img-box">
                                    <div className="img-item">
                                        <img src="karthik-img.png" alt="img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 home-detail-main home-col-2">
                            <div className="home-detail mb-5">
                                <h1>KARTHIK K</h1>
                                <h2>I'm a
                                    <span data-text="Intern JAVA Fullstack Developer" className="ms-2"> JAVA Fullstack Developer </span>
                                </h2>
                                <p>A recent B.C.A gradiuate with a strong academic foundation, Eager to launch a professional career in the field of technology. Proficient in HTML, CSS3, JavaScript, and Java with a solid understanding of programming principles. Committed to applying techhnical knowledge and problem-solving skills to contribue effictively in dynamic growth-oriented work environment.</p>
                                <div className="btn-sci">
                                    <a href="public/KARTHIK_K-9384114211.pdf" className="btn1" download="Karthik">Download Resume</a>
                                    <a href="https://www.linkedin.com/in/k-karthik-201540293/" className="icon-btn"><i class="fa-brands fa-linkedin"></i></a>
                                    <a href="https://github.com/Karthik-karunakaran" className="icon-btn"><i className="fa-brands fa-github"></i></a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            
        </>
    )
}
export default Home;