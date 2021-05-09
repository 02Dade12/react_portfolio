import React from "react";

function Contact() {
    return (
        <section className="container">
            <div className="row row-cols-1">
                <div className="col"><h1>Contact</h1></div>
                <div className="col">

                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Name"></input>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <input className="btn btn-primary" type="submit" value="Submit"></input>

                </div>

            
            </div>
        </section>
    )
}

export default Contact;