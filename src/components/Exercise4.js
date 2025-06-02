"use client";

import React,{useState}from "react";

export default function Person(){
    const[name,setName]=useState("Mg Aung Aung");
    const[date,setDate]=useState("new Date()");


    return(
        <div>
            <h1>State is functional Component</h1>
            <div>Z{name}</div>
            <div>{date.toString()}</div>
        </div>
    );


}