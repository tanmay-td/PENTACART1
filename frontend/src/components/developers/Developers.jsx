import React from "react";
import "./Developers.css";
import SubFooter from "../footer/SubFooter";

const developers = [
  {
    name: "Amol Rathod",
    designation: "Full-stack Developer",
    icon: "https://img.freepik.com/premium-vector/design-studio-concept-modern-flat-design-man-designer-creates-content-site-drawing_9209-6776.jpg?w=2000",
  },
  {
    name: "Mahadev Bansode",
    designation: "Backend Developer",
    icon: "https://cdn1.vectorstock.com/i/1000x1000/30/10/software-developer-and-programmer-vector-10673010.jpg",
  },
  {
    name: "Himanshu Pise",
    designation: "Full-stack Developer",
    icon: "https://media.istockphoto.com/id/1301180564/vector/man-with-laptop-semi-flat-rgb-color-vector-illustration-freelancer-sitting-on-floor-bearded.jpg?s=612x612&w=0&k=20&c=25KfAIJsP4r2q9ESYK2agrpyiGo6CyEuGOX9lk-04RM=",
  },
  {
    name: "Tanmay Deshmukh",
    designation: "Full-stack Developer",
    icon: "https://thumbs.dreamstime.com/b/web-developer-programmer-flat-vector-illustration-young-coder-freelancer-headphones-cartoon-character-designer-working-146832093.jpg",
  },
  {
    name: "Radhika Pathak",
    designation: "UI Developer",
    icon: "https://img.freepik.com/free-vector/hand-drawn-flat-design-devops-illustration_23-2149375793.jpg?w=2000",
  },
];

const Developers = () => {
  return (
    <div className="about-us-page">
      <div className="header">
        <h1 className="main-heading">Meet Our Team</h1>
        <p className="sub-heading">
          We are a team of talented developers, designers, and engineers who are
          passionate about creating innovative and high-quality software
          products. Meet our team:
        </p>
      </div>
      <div className="developers-container">
        {developers.map((developer, index) => (
          <div className="developer-card" key={index}>
            <img src={developer.icon} alt={developer.designation} />
            <h2 className="sub-heading">{developer.name}</h2>
            <p className="text-dark">{developer.designation}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-3">
        <SubFooter />
      </div>
    </div>
  );
};

export default Developers;
