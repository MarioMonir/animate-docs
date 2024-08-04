import { useGSAP } from "@gsap/react";
import { animateMe } from "./Animaiton";

function App() {
  useGSAP(animateMe, []);

  return (
    <div>
      <div className="request">
        <p>Request</p>
      </div>
      <div className="response">
        <p>Response</p>
      </div>
    </div>
  );
}

export default App;
