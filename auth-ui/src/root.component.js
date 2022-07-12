import { loggedInEvent } from "@eminds/components";
import { useEffect, useState } from "react";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

export default function Root(props) {
  const [toggle, setToggle] = useState(false)

  useEffect(()=>{
    window.addEventListener(loggedInEvent.type, (ev)=>{
      console.log(ev.detail);
      alert('logged in')
    })
  },[])

  return (<div>
    {toggle ? <button onClick={() => setToggle(false)}>Login</button> :
      <button onClick={() => setToggle(true)}>Register</button>}

    <br />
    <br />

    {toggle ? <Register /> : <Login />}
  </div>);
}
