import React from 'react';
import '../styles/HomePageExample.css'

const HomePageExample = (props) => {
  if (props.imageSide === 'right') {
    return (
      <div className="homePageExampleRow">
        <div className="homePageExampleTextContainerRight">
          <p className="homePageExampleText">{props.exampleText}</p>
        </div>
        <img src={props.src} className="homePageImage"></img>
      </div>
    )
  }
  return (
    <div className="homePageExampleRow">
      <div className="homePageExampleImageContainer">
        <img src={props.src} className="homePageImage"></img>
      </div>
      <div className="homePageExampleTextContainerLeft">
        <p className="homePageExampleText">{props.exampleText}</p>
      </div>
    </div>
  )
}

export default HomePageExample;