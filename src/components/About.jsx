import React from "react";
import { Link } from 'react-router-dom';

const About = (props) => {
  return (
    <div className="container mt-5 mb-5">
    <img src="images/slideshow2.jpg" class="img-fluid" alt="..."></img>
      <p class="lh-sm mt-3">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <p class="lh-sm mt-3">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
      </p>
      <h5 className="mt-4 ">If you need more info please contact us.</h5>
      <Link to={"/contactus"} ><button type="button" class="btn btn-outline-danger rounded-0 mt-3">Contact us</button></Link>
    </div>
  );
};

export default About;
