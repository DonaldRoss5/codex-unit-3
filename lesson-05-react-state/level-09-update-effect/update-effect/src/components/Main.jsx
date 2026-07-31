import { useEffect } from "react";

export function Main() {
  const [didMount, setDidMount] = useState(false);

  const [update, setDidUpdate] = useState(false);
  const [message, setMessage] = useState("Main component hasn't updated.");

  useEffect(function componentDidMount() {
    setDidMount(true);
  }, []);

  useEffect(
    function componentDidUpdate() {
      if ((didMount = true)) {
        setDidUpdate(true);
      }
    },
    [didMount, message],
  );

  function handleClick() {
    setMessage("The Main component has updated.");
  }

  debugger;

  return (
    <main>
      <p>{"didMount: " + didMount}</p>
      <p>{"didUpdate" + didUpdate}</p>
      <p>{message}</p>
      <button onClick={handleClick}>Click to update</button>
      <p>
        To track the update phase, use a second useEffect with a dependency
        list. The if condition is necessary because useEffect always runs on
        mount too — without it, the update logic would fire immediately on the
        first render before any real update has happened..
      </p>
    </main>
  );
}

export default Main;
