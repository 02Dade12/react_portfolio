import React, { Component } from "react";
import Card from "./Card";
import Wrapper from "./Wrapper";
// import Title from "./Title";
import content from "../content.json";


class ContentCard extends Component {
    state = {
      content
    };
  
    render() {
      return (
        <Wrapper>
          {this.state.content.map(content => (
            <Card
            image={content.image}
            title={content.title}
            description={content.description}
            demo={content.demo}
            repo={content.repo}
            />
          ))}
        </Wrapper>
      );
    }
  }
  
  export default ContentCard;
