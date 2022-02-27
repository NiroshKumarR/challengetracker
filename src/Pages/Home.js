import Intro from "../components/intro";
import flaticon from "../assets/flaticon.png";
export default function Home() {
  return (
    <div id="home" className="container flex flex-col mx-auto lg:px-20 p-5">
      <div className="flex items-end justify-end">
        <a href="https://www.flaticon.com/free-icons/" title="Flaticon icons">
          <img src={flaticon} alt="Flation" className="w-20" />
        </a>
      </div>
      <div id="name" className="lg:ml-72">
        <h1 className="font-semibold lg:text-4xl text-3xl">
          <span className="font-serif lg:text-6xl text-4xl">C</span>hallenge{" "}
          <span className="font-serif lg:text-6xl text-4xl">T</span>racker
        </h1>
        <span className="divider h-1 rounded-lg bg-primary lg:w-1/2"></span>
      </div>

      <div id="into">
        <Intro />
      </div>
    </div>
  );
}
