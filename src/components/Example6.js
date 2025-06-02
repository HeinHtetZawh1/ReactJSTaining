"use client";

import React,{ useState} from "react";

//Example6: Event in Functional Commponent
export default function Person() {
    const [name, setName] =useState();
    const [email, setEmail] = useState();
    const [phoneNo, setPhoneNo] = useState();

    const onChangeEmail = (changedEmail) => {
        setEmail(changedEmail);
    };

    const onChangePhoneNo = (event) => {
        console.log ('onChangedPhoneNO',event)
        setPhoneNo(event.target.value);
    };

    const onClickButton = () =>{
        alert("Button 1 clicked!");
    };

    const onClickButton2 = () =>{
        alert("Button 2 clicked!");
    };

    return(
        <div>
            <h1>Event in Functional Commponent</h1>
            <input
            value={name}
            placeholder="Enter Name"
            onchange={(event) => setName(event.target.value)}
            
            />
            <input
            value={email}
            placeholder="Enter Email"
            onChange={(event)=>onChangeEmail(event.target.name)}
            />
            <input
            value={phoneNo}
            placeholder="Enter PhoneNo"
            onChange={onChangePhoneNo}
            />
            <button onClick={onClickButton}>Button 1</button>
            <button onClicl={()=>onClickButton2()}>Button2</button>
        </div>
    );
}


