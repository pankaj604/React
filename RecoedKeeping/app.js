// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

// import "./files/Test.css"

function App() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [data, setdata] = useState([]);
  const addData = () => {
    setdata([
      ...data,
      {
        name,
        email,
      },
    ]);
    setname("");
    setemail("");
  };

  function remove(i) {
    let arr = data;
    arr.splice(i, 1);
    setdata([...arr]);
  }

  return (
    <div className="App">
      <header className="heading"><h1 className="h1-1">Record Keeping</h1></header>

      <main className="main">
        <div className="form">
          <section className="name">
            <TextField
              onChange={(event) => setname(event.target.value)}
              value={name}
              id="outlined-basic"
              label="name"
              variant="outlined"
            />
          </section>
          <section className="email">
            <TextField
              onChange={(event) => setemail(event.target.value)}
              value={email}
              id="outlined-basic"
              label="email"
              variant="outlined"
            />
          </section>
          <section className="add-btn">
            {" "}
            <Button onClick={addData} variant="contained">
              Add
            </Button>
          </section>
        </div>

        <div className="menu">
          <h1 className="menu-h1">Name</h1>
          <h1 className="menu-h1">Email</h1>
          <h1 className="menu-h1">Remove</h1>
          {/* <Button onClick={remove()} variant="contained">Remove</Button> */}
        </div>
      </main>
      <div className="add-data">
        {data.map((e, i) => {
          return (
            // eslint-disable-next-line no-unreachable
            <>
            <div className="data-size">
              <h1 className="h">{e.name}</h1>
              <h1 className="h">{e.email}</h1>
              <Button
                className="rmv-btn"
                onClick={() => remove(i)}
                variant="contained"
              >
                Remove
              </Button>
              </div>
            </>
          );
        })}
      </div>
     
    </div>
  );
}

export default App;
