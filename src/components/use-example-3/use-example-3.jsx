// IMPORTS -
import { use, Suspense, useState } from "react";
import Loading from "../loading";

const fetchData = () => {
  return new Promise((resolve) => setTimeout(resolve, 1000, "Hello world!"));
};

const MessageContainer = ({ messagePromise }) => {
  return (
    <Suspense fallback={<Loading />}>
      <MessageOutput messagePromise={messagePromise} />
    </Suspense>
  );
};

const MessageOutput = ({ messagePromise }) => {
  const message = use(messagePromise);

  return <p className="text-xl">{message}</p>;
};

const UseExample3 = () => {
  const [messagePromise, setMessagePromise] = useState(null);
  const [show, setShow] = useState(false);

  const download = () => {
    setMessagePromise(fetchData());
    setShow(true);
  };

  if (show) return <MessageContainer messagePromise={messagePromise} />;
  else {
    return (
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white 
      font-bold p-3 rounded w-full"
        onClick={download}
      >
        Download message
      </button>
    );
  }
};

export default UseExample3;
