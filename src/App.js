import React from "react";
import "./App.css";
import Counter from "./Counter";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./style.css";
import TextInput from "./calender";
import Table from "./table";
function App() {
  return (
    // <>
    //   <TextInput />
    // </>
    // <div>
    //   <Provider store={store}>
    //     <Counter />
    //   </Provider>
    // </div>
    <>
      <Table />
    </>
  );
}

export default App;
