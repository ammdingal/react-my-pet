import React, { useState, useEffect } from "react";
import '../assets/stylesheets/style.css';

function Pet(){
    const [petName, setPetName] = useState("");

    useEffect(() => {
        const storedPetName = localStorage.getItem("petName");
        if (storedPetName) {
            setPetName(JSON.parse(storedPetName));
        }
    }, []);

    const handleSetPetName = (event) => {
        event.preventDefault();
        const newPetName = event.target.elements.petName.value;
        if (newPetName) {
            setPetName(newPetName);
            localStorage.setItem("petName", JSON.stringify(newPetName));
        }
    }

    return(
        <div style={{ 
            backgroundImage: `url('https://media2.giphy.com/media/vbGLQXbaOoi2WXBNaF/giphy.gif?cid=ecf05e479nu0ajeb6ql2weitxwrimemse58shj2795tg7z2c&rid=giphy.gif&ct=s')`,
            height: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',}}>
        <div className="container">
            <h1>My Pet</h1>
            <form onSubmit={handleSetPetName}>
                <input type='text' name='petName'/>
                <input type='submit' value='Set Pet Name'/>
            </form>
            <h2>Hello, I'm {petName}</h2>
            <img src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzhkZGRjNjIyNGRlOGQ4Y2JjYjM0ZjU0MjU2ZWIyZTQ2YjIwM2EzOCZjdD1z/PiQNvGsBwIRqwSoCm5/giphy.gif' alt='poodle'/>
        </div>
        </div>
    )
}

export default Pet;
