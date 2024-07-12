// IMPORTS -
import { data } from "../utils/data";

const HomePage = () => {
  return (
    <>
      <div className="text-xl text-center">
        This is a playground for React 19 and React experimental features. This
        is for learning purposes only.
      </div>

      <div className="my-5 text-xl">
        <h2 className="my-5">Examples</h2>
        <ul>
          {data.map((item) => (
            <li
              className="bg-slate-50 p-4 rounded shadow my-5"
              key={item.heading}
            >
              <div>
                <h3 className="text-2xl font-bold">{item.heading}</h3>
                <p className="my-2">{item.text}</p>
                <a className="font-bold text-blue-800" href={item.href}>
                  View
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HomePage;
