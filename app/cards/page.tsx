import Card from "@/components/card/card";
import "./module.css"

const cards = () => {
  return (
    <>
      <h1>Marvel characters</h1>
      <input type="search" placeholder="find" />
      <div>
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};
export default cards;
