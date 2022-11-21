import {fireEvent, render} from "@testing-library/react";
import MainScreen, {MyContext} from "../../components/MainScreen/MainScreen";
import Provider from "react-redux/es/components/Provider";
import React from "react";
import {renderWithProviders} from "../utils/test-utils";
import { MemoryRouter } from "react-router-dom";
import {screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {ModalBlock} from "../../components/modal/Modal";
// const  axios = require('axios')
// import axios from "axios";
const create = require('../../components/MainScreen/MainScreen')
jest.mock('axios')
    console.log(create)
describe('MainScreen Test', () => {

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
    let response:any;
    beforeEach(()=>{
        response={
            data:[
                {
                    name: `Rando`,
                    username: `NameRand`,
                    email: 'Sincere@april.biz',
                    address: {
                        street: 'Kulas Light',
                        suite: 'Apt. 556',
                        city: 'Gwenborough',
                        zipcode: '92998-3874',
                        geo: {
                            lat: '-37.3159',
                            lng: '81.1496',
                        },
                    },
                    phone: '1-770-736-8031 x56442',
                    website: 'hildegard.org',
                    company: {
                        name: 'Romaguera-Crona',
                        catchPhrase: 'Multi-layered client-server neural-net',
                        bs: 'harness real-time e-markets',
                    },
                }
            ]
        }
    })
    const store= {

    }

    test("INPUT CREATE", async () => {
        render(
            <ModalBlock open={true} setOpen={()=>false} create={create}/>
        )
        const inputName = await screen.findByTestId('name-input')
        const inputUserName =await screen.findByTestId('username-input')
        const  crate = await screen.findByTestId('create')
        userEvent.type(inputName,'fndsfj')
        userEvent.type(inputUserName,'fndsfj')
        userEvent.click(crate)
        expect(crate).toBeInTheDocument()


    });

    // test("Create",async ()=>{
    //
    // })
})
