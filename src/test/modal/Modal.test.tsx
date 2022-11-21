import {renderWithProviders} from "../utils/test-utils";
import {MemoryRouter} from "react-router-dom";
import MainScreen from "../../components/MainScreen/MainScreen";
import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import {ModalBlock} from "../../components/modal/Modal";
import {SearchAppBar} from "../../components/material/searchAppBar";
import userEvent from "@testing-library/user-event";

describe('MainScreen Test', () => {

    const store= {
        // id: 4,
        // name: "Patricia Lebsack",
        // username: "Karianne",
        // email:"Julianne.OConner@kory.org",
        // nameChanged: false,
        // address: {
        //     street: "Hoeger Mall",
        //     suite: "Apt. 692",
        //     city: "South Elvis",
        //     zipcode: "53919-4257",
        //     geo: {
        //         lat: "29.4572",
        //         lng: "-164.2990",
        //     }
        // },
        // phone:"493-170-9623 x156",
        // website: "kale.biz",
        // company: {
        //     name: "Robel-Corkery",
        //     catchPhrase: "Multi-tiered zero tolerance productivity",
        //     bs:"transition cutting-edge web services",
        // }
    }

    test("INPUT CREATE", async () => {
       render(

            <ModalBlock open={true} setOpen={()=>false}/>
           )
        const inputName = await screen.findByTestId('name-input')
        const inputUserName =await screen.findByTestId('username-input')
        const name = screen.findByTestId('name-input')
        userEvent.type(inputName,'fndsfj')
        expect(inputName).toBeInTheDocument()
        expect(inputUserName).toBeInTheDocument()
    });
})
