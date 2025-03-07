// import ListGroup from "./components/ListGroup";
// import { Children } from "react";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

// import Alert from "./components/Alert";
function App() {
  // let items = ["New York", "Delhi", "Mumbai", "Banglore"];
  // const handleSelect = (item: string) => {
  //   console.log(item);
  // };
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>

      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelect} /> */}
    </div>
  );
}
export default App;
