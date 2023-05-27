import star from "../img/icons/star.svg";

export default function Home() {
  return (
    <div className="page-wrapper container-max">
      <div className="h1-container">
        <img className="h1-star" src={star} alt="" />
        <h1>
          Welcome to Brew<span className="accent">Hive</span>
        </h1>
        <img className="h1-star" src={star} alt="" />
      </div>

      <p className="tagline">Unleash Your Coffee Passion with BrewHive</p>
      <p>Today I am looking for</p>
      
    </div>
  );
}
