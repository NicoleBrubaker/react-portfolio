import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, link }) => (
  <div
    style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      margin: "8px",
      width: "2.5in",
      boxSizing: "border-box",
    }}
  >
    <h2>{title}</h2>
    <p>{description}</p>
    <Link to={link}>Learn More</Link>
  </div>
);

export default function Home() {
  const cards = [
    {
      title: "Adoptable",
      description:
        "A website to find dogs available for adoption. Written in JavaScript.",
      link: "https://nicolebrubaker.github.io/dog-adoption-finder/",
    },
    {
      title: "Code Quiz",
      description: "A HTML, CSS, JS quiz. Written in JavaScript.",
      link: "https://nicolebrubaker.github.io/Code-Quiz/",
    },
    {
      title: "Password Generator",
      description: "A randomized password generator. Written in JavaScript.",
      link: "https://nicolebrubaker.github.io/Password-Generator/",
    },
    {
      title: "Tech Blog",
      description:
        "A tech blog created using JavaScript and Handlebars. No live site currently.",
      link: "https://github.com/NicoleBrubaker/Tech-Blog",
    },
    {
      title: "Social Network",
      description:
        "A social network app created in JavaScript. There is no live site currently.",
      link: "https://github.com/NicoleBrubaker/Social-Network",
    },
    {
      title: "Weather Dashboard",
      description: "A weather search tool made in JavaScript.",
      link: "https://nicolebrubaker.github.io/Weather-Dashboard/",
    },
  ];

  return (
    <div style={{ maxWidth: "56rem", margin: "0 auto", padding: "16px" }}>
      <h1>Home Page</h1>
      <p>This is my projects page.</p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
}
