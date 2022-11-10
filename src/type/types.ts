import {Dispatch} from "react";
import * as React from "react";




// Redux



export interface User{
    id:number,
    name:string,
    username:string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

export  interface ActionReducerFetch{
    type: string,
    payload:User
}
export  interface ActionReducerAdd{
    type: string,
    payload:User
}



// Components



export interface ISignInForm {
    name: string;
    username: string;
}
export interface ISignInForm {
    name: string;
    username: string;
}
export interface IModalUser{
    row:User,
    deleteItem:(id:number)=>void,
    setUserTitle:Dispatch<string>,
    setTitle:Dispatch<string>,
    updateUser:(id:number)=>void
}
export interface ISeach{
    setSet:Dispatch<string>,
    setOpen:Dispatch<boolean>,
    open:boolean,
    create:()=>void,
    setUserTitle:Dispatch<string>,
    setTitle:Dispatch<string>,
    handleOpen:(e:React.MouseEvent<HTMLButtonElement>)=>void
}
export interface ISignInForm {
    name: string;
    username: string;
}
export interface IModal{
    setUserTitle:Dispatch<string>,
    setTitle:Dispatch<string>,
    open:boolean,
    updateUser?:(id:number)=>void,
    setOpen:Dispatch<boolean>,
    create?:()=>void,
    id?:number
}
