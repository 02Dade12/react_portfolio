import React from "react";
import ContentCard from "../Components/ContentCard"

function Portfolio() {
    return (
        <section class="container">
    <div class="row">
      <div class="col">
        <h1>Portfolio</h1>
      </div>
    </div>

        {/* <ContentCard /> */}
    <div class="container">
      <div class="row row-cols-3">
        <div class="col-sm">
          <div class="card">
            <img src="./assets/ProjectOne.png" class="card-img-top img-fluid img-thumbnail" alt="My First Project"></img>
            <div class="card-body text-center">
              <h5 class="card-title">Ready S.E.T.T. Eat</h5>
              <p class="card-text">This is my first group project, we used 2 APIs from Edamam with to create a recipe a
                nutrition search.</p>
              <div class="card-body">
                <a href="https://tkuebler12.github.io/ProjectOne/" class="card-link">Try Me</a>
                <a href="https://github.com/tkuebler12/ProjectOne" class="card-link">Repository</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm">
          <div class="card">
            <img src="./assets/Calendar.png" class="card-img-top img-fluid img-thumbnail" alt="Workday Calendar"></img>
            <div class="card-body text-center">
              <h5 class="card-title">Workday Calendar</h5>
              <p class="card-text">This is a Workday Calendar that will save user input and update the time blocks in
                real time.</p>
              <div class="card-body">
                <a href="https://02dade12.github.io/Workday_Scheduler/" class="card-link">Try Me</a>
                <a href="https://github.com/02Dade12/Workday_Scheduler" class="card-link">Repository</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm">
          <div class="card">
            <img src="./assets/PasswordGen.png" class="card-img-top img-fluid img-thumbnail" alt="Password Generator"></img>
            <div class="card-body text-center">
              <h5 class="card-title">Password Generator</h5>
              <p class="card-text">This is a Password Generator that will create a random password based on user
                specifications.</p>
              <div class="card-body">
                <a href="https://02dade12.github.io/BC_HW3_Passord_Generator/" class="card-link">Try Me</a>
                <a href="https://github.com/02Dade12/BC_HW3_Passord_Generator" class="card-link">Repository</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}

export default Portfolio;