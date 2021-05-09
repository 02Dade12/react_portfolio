import React from "react";
// import "./style.css";

function Card(props) {
  return (
    <div class="container">
      <div class="row row-cols-3">
          <div class="col-sm">
              <div class="card">
                  <img class="card-img-top img-fluid img-thumbnail" alt={props.title} src={props.image}></img>
                  <div class="card-body text-center">
                      <h5 class="card-title">{props.title}</h5>
                      <p class="card-text">{props.description}</p>
                      <div class="card-body">
                          <a href={props.demo} class="card-link">Demo</a>
                          <a href={props.repo} class="card-link">Repository</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
}

export default Card;

