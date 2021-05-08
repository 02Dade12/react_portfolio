import React from "react";

function AboutMe() {
    return (
        <section className="container">
            <div className="row row-cols-1">
                <div className="col"><h1>About Me</h1></div>
                <div className="col"><div className="clearfix">
                    <img className="float-start" src="./assets/enrique.jpeg" col-md-6 float-md-end mb-3 ms-md-3 alt="Enrique" width="200px" ></img>

                        <p>
                            Hello, my name is Enrique Collazo and thank you for coming to my page! This portfolio page was created to house all my personal designs and thoughts in one place. I’m a multifaceted person with over 10+ years of Customer Service & Administraive Expereince. My main interest are business, technology, and fitness. I am a self-starter, excel in organizational structure, analytics, understand agile project management, and have a knack for problem solving.</p>

                        <p>
                            I enjoy time with my family and working on my business; I’m married and a father of 2. When I’m not working or with the family, I spend my time on the mat practicing Jiu-Jitsu or playing Xbox.</p>

                        <p>
                            Please feel free to take a look around and reach out to me for any inquiries.</p>

                        <p className="text-center">Thanks & Enjoy!</p>

                </div>
            </div>
        </div>
  </section>
    )
}

export default AboutMe;