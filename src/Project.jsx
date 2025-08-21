import React, { useEffect } from "react";

function Project() {
  useEffect(() => {
    const arrowRight = document.querySelector(
      ".portfolio-box .navigation .right-arrow"
    );
    const arrowLeft = document.querySelector(
      ".portfolio-box .navigation .left-arrow"
    );

    let index = 0;

    const activePortfolio = () => {
      const imgSlide = document.getElementById("img-slide");
      const portfolioDetails = document.querySelectorAll(".project-item");

      imgSlide.style.transform = `translateX(calc(${index * -100}% - ${
        index * 2
      }rem))`;

      portfolioDetails.forEach((detail) => {
        detail.classList.remove("active");
      });
      portfolioDetails[index].classList.add("active");
    };

    // Initial portfolio setup
    activePortfolio();

    // Right arrow click event
    arrowRight.addEventListener("click", () => {
      if (index < 1) {
        index++;
        // arrowLeft.classList.remove('disable');
      } else {
        index = 2;
        arrowRight.classList.add("disable");
        arrowLeft.classList.remove("disable");
      }
      activePortfolio();
    });

    // Left arrow click event
    arrowLeft.addEventListener("click", () => {
      if (index > 1) {
        index--;
        arrowRight.classList.remove("disable");
        // arrowLeft.classList.add('disable');
      } else {
        index = 0;
        arrowLeft.classList.add("disable");
      }
      activePortfolio();
    });

    // Cleanup on unmount
    return () => {
      arrowRight.removeEventListener("click", activePortfolio);
      arrowLeft.removeEventListener("click", activePortfolio);
    };
  }, []);

  return (
    <>
      <section className="project three container">
        <div className="row d-flex justify-content-center align-items-center w-100 h-100">
          <div className="col-12">
            <h2 className="project-latest">
              My <span>Projects</span>
            </h2>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="project-item active">
              <div className="project-item-detail">
                <h1>01</h1>
                <p className="project-title">Food order website</p>
                <p>
                  Built a responsive and user-friendly Food order website with a
                  React.js frontend and Spring Boot backend. The website
                  includes an admin panel, features a clean and user-friendly
                  interface, and is fully responsive making it accessible on any
                  screen size
                </p>
                <p className="tools">
                  {" "}
                  Spring Boot, React.js, Bootstrap, HTML, CSS, JavaScript, MySQL
                </p>
              </div>
              <a href="https://restaurentuser.netlify.app/">
                <i class="fa-solid fa-link"></i>
              </a>
            </div>
            <div className="project-item">
              <div className="project-item-detail">
                <h1>02</h1>
                <p className="project-title">Portfolio</p>
                <p>
                  This portfolio showcases my academic background, internship
                  experience, and technical skills, with a focus on projects
                  developed using Reacj.js. It highlights my expertise gained
                  through hands-on experience at I5 Technologies and
                  demonstrates my ability to create innovative, user-centric
                  solutions.
                </p>
                <p className="tools">
                  HTML, CSS3, Bootstrap, JavaScript, React.js
                </p>
              </div>
              <a href="https://karthik-karunakaran.github.io/Note-Application/">
                <i class="fa-solid fa-link"></i>
              </a>
            </div>
            <div className="project-item">
              <div className="project-item-detail">
                <h1>03</h1>
                <p className="project-title">Note Application</p>
                <p>
                  The Note Application is a simple, user-friendly web-based tool
                  that allows users to manage their notes efficiently. Built
                  using JavaScript, it features a responsive design that works
                  seamlessly across all device screen sizes. This project offers
                  an intuitive interface, making it easy to create, view, and
                  organize notes effectively.
                </p>
                <p className="tools">HTML, CSS3, Bootstrap, JavaScript</p>
              </div>
              <a href="https://karthik-karunakaran.github.io/Note-Application/">
                <i class="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center">
            <div className="portfolio-box">
              <div className="portfolio-carousel">
                <div className="img-slide" id="img-slide">
                  <div className="img-item">
                    {/* <img src="note-pro.png" alt="img" /> */}
                    <img src="/restaurent.png" />
                  </div>
                  <div className="img-item">
                    <img src="portfolio-img.png" alt="img" />
                  </div>
                  <div className="img-item">
                    {/* <img src="3.jpg" alt="img" /> */}
                    <img src="/note-pro.png" />
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
