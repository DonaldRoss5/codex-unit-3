import { useState } from "react";


export function Main() {
  const [didMount, setDidMount] = useState(false);
  debugger;
  return (
    <main>
      <p>{didMount}</p>
    </main>
  );
}
