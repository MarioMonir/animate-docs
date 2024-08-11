import { createElement } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "./aninmateDocs.css";

const element1GoToElememt2 = (id1: Steps, id2: Steps) => {
  const div1 = document.getElementById(id1);
  const div2 = document.getElementById(id2);

  const rect1 = div1!.getBoundingClientRect();
  const rect2 = div2!.getBoundingClientRect();

  const x = rect2.left - rect1.left;
  const y = rect2.top - rect1.top;

  return gsap.to(div1, { x, y, duration: 1, opacity: 1 });
};

const drawLineBetweenTwoElements = (id1: Steps, id2: Steps) => {
  const line = document.getElementById("line");
  const el1 = document.getElementById(id1);
  const el2 = document.getElementById(id2);

  if (!line || !el1 || !el2) {
    console.log("hello world");
    return;
  }

  const rect1 = el1!.getBoundingClientRect();
  const rect2 = el2!.getBoundingClientRect();

  const x1 = rect1.left + rect1.width / 2;
  const y1 = rect1.top + rect1.height / 2;
  const x2 = rect2.left + rect2.width / 2;
  const y2 = rect2.top + rect2.height / 2;

  line!.setAttribute("x1", x1.toString());
  line!.setAttribute("y1", y1.toString());
  line!.setAttribute("x2", x2.toString());
  line!.setAttribute("y2", y2.toString());

  // Example animation
  // gsap.to(el1, { x: 100, duration: 2 });
};

enum Steps {
  User = "user",
  Request = "request",
  Controller = "controller",
  Service = "service",
  Validation = "Validation",
  Repo = "repo",
}

const steps = [
  Steps.User,
  Steps.Request,
  Steps.Controller,
  Steps.Service,
  Steps.Validation,
  Steps.Repo,
];

const animateMe = () => {
  gsap
    .timeline()
    .add(element1GoToElememt2(Steps.Request, Steps.Controller))
    .add(element1GoToElememt2(Steps.Request, Steps.Service))
    .add(element1GoToElememt2(Steps.Request, Steps.Validation))
    .add(element1GoToElememt2(Steps.Request, Steps.Repo))
    .add(element1GoToElememt2(Steps.Request, Steps.User));

  drawLineBetweenTwoElements(Steps.Controller, Steps.Repo);
  // element1GoToElememt2("request", "controller");
  // element1GoToElememt2("request", "service");
  // element1GoToElememt2("request", "validation");
  // element1GoToElememt2("request", "repo");
  // element1GoToElememt2("request", "validation");
  // element1GoToElememt2("request", "service");
  // element1GoToElememt2("request", "controller");
  // element1GoToElememt2("request", "user");
  // Animate div1 to the new position
  // gsap.set(".request .response", {
  //   transformOrigin: "50% 50%",
  // });
  // gsap.timeline().to(".request", {
  //   y: 25,
  //   // duration: 1,
  //   scale: 1,
  //   // borderRadius: "20%",
  //   // border: "2px solid white",
  //   //   padding: "20",
  //   // ease: "power2.Out",
  //   stagger: 1,
  //   repeat: 2,
  // });
  // .to(".response", {
  //   y: 100,
  //   duration: 2,
  //   scale: 1,
  //   ease: "power2.Out",
  //   // borderRadius: "20%",
  //   // border: "2px solid white",
  //   //   padding: "20",
  // });
  // gsap.to(".request", {
  //   // opacity: 0, // Fade out element1
  //   duration: 1,
  //   x: ".response",
  //   y: ".response",
  //   onComplete: () => {
  //     gsap.to(".response", {
  //       x: 25,
  //       opacity: 0, // Fade in element2
  //       duration: 1,
  //     });
  //   },
  // });
};

export const AnimateDocs = () => {
  useGSAP(animateMe, []);

  return (
    <div id="app-container">
      <svg id="lineSvg" width="100%" height="100%">
        <line
          id="line"
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          stroke="red"
          strokeWidth="2"
        ></line>
      </svg>
      {steps?.map((id: string, index: number) =>
        createElement(
          "div",
          {
            id,
            className: "entity",
            key: index,
            style: { zIndex: index ? index + 1 : 1000, position: "relative" },
          },
          id
        )
      )}
    </div>
  );
};
