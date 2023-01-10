import React from 'react';
import coverImage from '../../assets/cover/PatrickPicture.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        My name is Patrick Duffy. I am 30 years old, born and raised in Houston, TX and I have a great desire to learn and improve in software development as a way to further my career and my own intelligence. I have enrolled in the Rice University Coding Bootcamp and have begun working on projects in order to grow my portfolio.
        </p>
      </div>
    </section>
  );
}

export default About;