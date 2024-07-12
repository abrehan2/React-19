// IMPORTS -
import {use, Suspense} from "react";
import Loading from "../loading";

const fetchData = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");

  return res.json();
}

const JokeItem = () => {

  const joke = use(fetchData());

  return (
    <div className="bg-slate-50 shadow-md p-4 my-6 rounded-lg">
    <h2 className="text-xl font-bold">
      {joke.value}
    </h2>
    </div>
  )
}

const UseExample1 = () => {
  return <Suspense fallback = {
   <Loading />
  }>
    <JokeItem />
  </Suspense>
}

export default UseExample1