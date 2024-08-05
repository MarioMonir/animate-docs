import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "./aninmateDocs.css";

const animateMe = () => {
  gsap.set(".request .response", {
    transformOrigin: "50% 50%",
  });

  gsap.timeline().to(".request", {
    y: 25,
    // duration: 1,
    scale: 1,
    // borderRadius: "20%",
    // border: "2px solid white",
    //   padding: "20",
    // ease: "power2.Out",
    stagger: 1,
    repeat: 2,
  });
  // .to(".response", {
  //   y: 100,
  //   duration: 2,
  //   scale: 1,
  //   ease: "power2.Out",
  //   // borderRadius: "20%",
  //   // border: "2px solid white",
  //   //   padding: "20",
  // });
};

export const AnimateDocs = () => {
  useGSAP(animateMe, []);

  return (
    <div>
      <div className="request">
        <p>Request 1</p>
      </div>
      <div className="request">
        <p>Request 2</p>
      </div>
      {/* <div className="response">
        <p>Response</p>
      </div> */}
    </div>
  );
};
