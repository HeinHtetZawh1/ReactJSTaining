"use client";

import React from "react";

//Example5; Event in Class Component
export default class Person extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"Mg Kyaw Min",
            email:"mlm@gmail.com",
            phoneNo:"09662806207",
    };
        this.onChangephoneNo=this.onChangephoneNo.bind(this);

        }
        onChangeEmail(changedEmail) {
            this.setSate({email:changedEmail});
        }
        onChangephoneNo(event) {
            this.setSate({phoneNo:event.target.value});
        }

        onClickButtonL(){
            alert ("Button 1 clicked!");
        }
        onClickButton2(){
            alert("Button 2 clicked1!");
        }
        render() {
            return (
                <div>
                    <h1>Event in Class Component</h1>
                    <input 
                     value={this.state.name}
                    placeholder="Enter Name"
                    onChange={(event)=> {
                        //console.log('onChanged Name Event :',event.target.value)
                        this.setState({name:event.target.value})
                    }}
                    />
                    <input 
                    value={this.state.email}
                    placeholder="Enter Email"
                    onChange={(event)=> this.onChangedEmail(event.target.value)}
                    />

                    <input
                    value={this.state.phoneNo}
                    placeholder="Enter phoneNo"
                    onChange={this.onChangedPhoneNo}
                    
                    />

                    <button onClick={this.onClickButton}>Button1</button>
                    <button onClick={()=>this.onClickButton2()}>Button 2</button>

                   

                    
                </div>
            )
        }
    }
