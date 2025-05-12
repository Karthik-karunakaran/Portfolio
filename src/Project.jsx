
import React, { useEffect } from 'react';

function Project() {

    useEffect(() => {
        const arrowRight = document.querySelector('.portfolio-box .navigation .right-arrow');
        const arrowLeft = document.querySelector('.portfolio-box .navigation .left-arrow');

        let index = 0;

        const activePortfolio = () => {
            const imgSlide = document.getElementById('img-slide');
            const portfolioDetails = document.querySelectorAll('.project-item');

            imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

            portfolioDetails.forEach(detail => {
                detail.classList.remove('active');
            });
            portfolioDetails[index].classList.add('active');
        }

        // Initial portfolio setup
        activePortfolio();

        // Right arrow click event
        arrowRight.addEventListener('click', () => {
            if (index < 1) {
                index++;
                arrowLeft.classList.remove('disable');
            } else {
                index = 2;
                arrowRight.classList.add('disable');
            }
            activePortfolio();
        });

        // Left arrow click event
        arrowLeft.addEventListener('click', () => {
            if (index > 1) {
                index--;
                arrowRight.classList.remove('disable');
            } else {
                index = 0;
                arrowLeft.classList.add('disable');
            }
            activePortfolio();
        });

        // Cleanup on unmount
        return () => {
            arrowRight.removeEventListener('click', activePortfolio);
            arrowLeft.removeEventListener('click', activePortfolio);
        };

    }, []);

    return (
        <>
            <section className="project three container">
                <div className="row d-flex justify-content-center align-items-center w-100 ">
                    <div className="col-12">
                        <h2 className="project-latest">My <span>Projects</span></h2>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="project-item active">
                            <div className="project-item-detail">
                                <h1>01</h1>
                                <p className="project-title">Note Application</p>
                                <p>The Note Application is simple and user-friendly web-based tool that allows user. Build using HTML, CSS3, JavaScrit and Bootstrapt. this project an intuitive interface for managing notes efficiently.</p>
                                <p className="tools">HTML, CSS3, Bootstrap, JavaScript</p>
                            </div>
                           <a href="https://karthik-karunakaran.github.io/Note-Application/"><i class="fa-solid fa-link"></i></a> 
                        </div>
                        <div className="project-item">
                            <div className="project-item-detail">
                                <h1>02</h1>
                                <p className="project-title">Portfolio</p>
                                <p>A dynamic personal portfolio highlighting my expertise, projects, and professional journey. Featuring a clean, responsive design, it presents my skills, achievements, and work samples effectively. </p>
                                <p className="tools">HTML, CSS3, Bootstrap, JavaScript, React.js</p>
                            </div>
                            <a><i class="fa-solid fa-link"></i></a> 
                        </div>
                        <div className="project-item">
                            <div className="project-item-detail">
                                <h1>03</h1>
                                <p className="project-title">Note Application</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quo ab labore quaerat cumque nisi excepturi veniam illo, assumenda molestiae!</p>
                                <p className="tools">HTML, CSS3, Bootstrap, JavaScript</p>
                            </div>
                            <i className="fa-brands fa-github"></i>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center">
                        <div className="portfolio-box">
                            <div className="portfolio-carousel">
                                <div className="img-slide" id="img-slide">
                                    <div className="img-item">
                                        <img src="note-pro.png" alt="img" />
                                    </div>
                                    <div className="img-item">
                                        <img src="portfolio-img.png" alt="img" />
                                    </div>
                                    <div className="img-item">
                                        <img src="3.jpg" alt="img" />
                                    </div>
                                </div>
                            </div>
                            <div className="navigation">
                                <button className="left-arrow button disable me-2">
                                    <i className="fa-solid fa-chevron-left"></i>
                                </button>
                                <button className="right-arrow button">
                                    <i className="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Project;
