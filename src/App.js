import React, { useEffect, useState } from "react";

import email from "./assets/email.svg";
import loc from "./assets/location.svg";
import phone from "./assets/phone.svg";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState("");
  const [value, setValue] = useState("random person");
  const [title, setTitle] = useState("name");

  const getPerson = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];
    const { phone, email } = person;
    const { large: image } = person.picture;
    const { password } = person.login;
    const { first, last } = person.name;
    
    const {
      registered:{date}, 
    }=person;

    const {
      dob: { age },
    } = person;
    
    const {
      street: { number, name },
    } = person.location;
    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first}${last}`,
      registered:`${date}`,
    };

    setPerson(newPerson);
    console.log(newPerson);
    setLoading(false);
    setTitle("name");
    setValue(newPerson.name);
  };
  useEffect(() => {
    getPerson();
  }, []);

  const handleValue = (e) => {
    if (e.target.classList.contains("icon")) {
      const newValue = e.target.dataset.label;
      setTitle(newValue);
      setValue(person[newValue]);
    }
  };

  return (
    <main >
      <section className="container">
        <div className="person" >
          <img
            src={(person && person.image) || defaultImage}
            alt="random user"
            className="img"
          />

          <p className="user-title">
            My {title} is <span className="user-value"> {value} </span>
          </p>
        </div>

        <div className="left">
        
          <img className="icon" src={email} alt={email} />
          <img className="icon" src={phone} alt={phone} />
          <img className="icon" src={loc} alt={"loc"}/>

        </div>
        <div className="right">
            <p >{person.email}</p>
            <p>{person.phone}</p>
            <p>{person.street}</p>
        </div>


     
       
        
 
     <div className="middle">
      <h5>Age: {person.age}</h5>
      <h5>Registered Date: {person.registered.substring(0,10)}</h5>
      </div>
{/*
        <div className="side">
          <img className="icon" src={email} alt={email} />
          <p >{person.email}</p>
        </div>
        <div>
          <img className="icon" src={phone} alt={phone} />
          <p>{person.phone}</p>
        </div>
        <div>
        <img className="icon" src={loc} alt={"loc"}/>
        <p>{person.street}</p>
        </div>
        <div>
        <h6>Age:{person.age}</h6>
        <h6>Registered Date:{person.registered}</h6>
</div>*/}

        <button className="btn" type="button" onClick={getPerson}>
        {loading ? "loading..." : "random user"}
      </button>
      </section>
     
    </main>
  );
}

export default App;
