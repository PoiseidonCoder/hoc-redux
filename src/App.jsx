import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Mai Van Thi");
  const [age, setAge] = useState("22");
  const [about, setAbout] = useState("Dep trai");
  const [imgUrl, setImgUrl] = useState(
    "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a"
  );
  return (
    <>
      <div className="">
        <div>${name}</div>
        <div>${age}</div>
        <textarea cols={3}>{about}</textarea>
        <img src={imgUrl} alt="Notthing" />
      </div>
      <h1>Edit Profile</h1>
    </>
  );
}

export default App;
