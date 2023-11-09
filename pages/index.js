import { decrement, increment, restart } from "@/redux/features/CounterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleCount = (action) => {
    if (action === "add") {
      dispatch(increment());
    } else if (action === "rest") {
      dispatch(decrement());
    } else {
      dispatch(restart());
    }
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <h1 className={`text-4xl font-bold`}>Hello Counter</h1>

      <div className="flex">
        <button
          onClick={() => handleCount("rest")}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          -
        </button>
        <p className="mx-5">{counter}</p>
        <button
          onClick={() => handleCount("add")}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          +
        </button>
      </div>
      <button
        onClick={() => handleCount("restart")}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        restart
      </button>
    </main>
  );
}
