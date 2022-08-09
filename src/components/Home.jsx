import { useState, useEffect } from "react";
import { useLocalStorage } from "../useLocalStorage";

export const Home = () => {
//   const [name, setName] = useState(() => {
//     getting stored value
//     const saved = localStorage.getItem("name");
//     const initialValue = JSON.parse(saved);
//     return initialValue || "";
//   });

//   useEffect(() => {
//     // storing input name
//     localStorage.setItem("name", JSON.stringify(name));
//   }, [name]);
const [name, setName] = useLocalStorage("name", "");

  return (
    <div>
        <form>
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            aria-label="fullname"
        />
        <input type="submit" value="Submit"></input>
        </form>
    </div>
    
  );


}
