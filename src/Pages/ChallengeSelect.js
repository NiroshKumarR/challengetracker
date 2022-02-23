import { useEffect, useState } from "react";
import Cards from "../components/cards";
import ChallengeForm from "../components/challengeForm";
import { useNavigate } from "react-router-dom";

export default function ChallengeSelect() {
  const navigate = useNavigate();

  const [challengeAccepted, setChallengeAccepted] = useState(false);

  // Functions
  const challengeForm = () => {
    setChallengeAccepted(true);
  };

  useEffect(() => {
    if (localStorage.getItem("challenge")) {
      navigate("/dashboard");
    }
  });

  return (
    <div className="mx-48 my-5">
      {!challengeAccepted && (
        // <div
        //   id="Challenge-Select"
        //   className="flex flex-col items-center justify-center gap-5 h-screen"
        // >
        <div id="challenge-cards">
          <Cards accepted={challengeForm} />
        </div>
        // </div>
      )}

      {challengeAccepted && (
        <div className="w-full p-10">
          <ChallengeForm />
        </div>
      )}
    </div>
  );
}
