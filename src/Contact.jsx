function Contact() {
    return (
        <>
            <section className="contact container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                        <div className="contact-detail">
                            <h2>Let's <span>Work Together</span></h2>
                            <div className="contact-detail-item phone">
                                <i className="fa-solid fa-phone"></i>
                                <p>Phone <span>(+91) 9384114211</span></p>
                            </div>
                            <div className="contact-detail-item ">
                                <i className="fa-solid fa-envelope"></i>
                                <p>Email <span>kk5035236@gmail.com</span></p>
                            </div>
                            <div className="contact-detail-item">
                                <i className="fa-solid fa-location-dot location"></i>
                                <p>Address<span>No 3, Mariamman kovel streat, parameshwaramangalam, chengalpattu district.</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="contact-form p-3">
                            <p className="contact">Contact <span>Me!</span> </p>
                            <form action="" className="row d-flex justify-content-center align-items-center">
                                <div className="col-12 col-1g-6 col-md-6">
                                    <input type="text" placeholder="Full Name" />
                                </div>
                                <div className="col-12 col-1g-6 col-md-6">
                                    <input className="input-number" type="number" placeholder="Phone Number" />
                                </div>
                                <div className="col-12 col-1g-6 col-md-6">
                                    <input type="email" placeholder="Email Address" />
                                </div>
                                <div className="col-12 col-1g-6 col-md-6">
                                    <input type="text" placeholder="Email Subject" />
                                </div>
                                <div className="col-12">
                                    <textarea name="" placeholder="write more.." className="form-control border-0 bg-none" rows="8" cols="70" id=""></textarea>
                                </div>
                                <div className="col-12 p-2 d-flex justify-content-center align-items-center mt-2 h-100">
                                    <button type="button">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;