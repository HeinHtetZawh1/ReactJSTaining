"use client";

import React from "react";

//Example:State in Class Component
export default class Person extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"Mg Kyaw Kyaw",
            date:new Date(),

        };

    }


    render(){
        return(
            <div>
                <h1>State in Clss Component</h1>
                <div>{this.state.name}</div>
                <div>{this.state.date.toString()}</div>
            </div>
        );

        
    }
}