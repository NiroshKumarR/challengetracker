import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ChallengeForm() {
  const navigate = useNavigate();

  // Data
  const [fromDate, setFromDate] = useState("");
  const [toDate, settoDate] = useState("");
  const [challengeTitle, setchallengeTitle] = useState("");

  // Functions
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { fromDate, toDate, challengeTitle };
    let storeData = JSON.stringify(data);
    localStorage.setItem("challengeDays", storeData);
    navigate("/dashboard");
  };

  const slectStartDate = (e) => {
    setFromDate(e.target.value);
    const date = new Date(e.target.value);
    let commingDays = new Date(
      date.setDate(
        date.getDate() + Number(localStorage.getItem("challengeDays"))
      )
    );
    let inputDays = JSON.stringify(commingDays).slice(1, 11);
    settoDate(inputDays);
  };

  return (
    <div
      id="challengeform"
      className="lg:flex items-center justify-center h-screen"
    >
      <form
        id="form"
        className="
        flex flex-col gap-5
        "
        onSubmit={handleSubmit}
      >
        <div className="form-control w-full">
          <h1 className="text-4xl font-bold font-serif">
            {localStorage.getItem("challengeDays")}Day challenge
          </h1>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">From</span>
          </label>
          <input
            type="date"
            name="fromDate"
            id="fromDate"
            onChange={slectStartDate}
            className="input input-bordered rounded-2xl"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">To</span>
          </label>
          <input
            type="date"
            name="toDate"
            id="toDate"
            value={toDate}
            readOnly
            className="input input-bordered rounded-2xl"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={(e) => setchallengeTitle(e.target.value)}
            className="input input-bordered rounded-2xl"
          />
        </div>
        <div className="form-control w-full mt-5">
          <button type="submit" className="btn ct-btn">
            Create Challenge
          </button>
        </div>
      </form>
    </div>
  );
}
