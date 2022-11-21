import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';
import {Simulate} from "react-dom/test-utils";
import waiting = Simulate.waiting;



class MainScreen extends Page {
    get nameI(){
        return $('#nameI')
    }
    get clickCreate(){
        return $('#clickCreate')
    }
    get create(){
        return $('#create')
    }
    get change(){
        return $('#change')
    }
    get usernameI(){
        return $('#usernameI')
    }
    get remove(){
        return $('#remove')
    }
    get usersItem(){
            return $$('#usersblock')

    }


    async loadData(username: string, name: string){
        try {
            await this.open()
            await this.clickCreate.click()
            await this.nameI.setValue(name)
            await this.usernameI.setValue(username)
            await this.create.click()
            await browser.executeAsync((done) => {
                setTimeout(done, 500)
            })
        }catch (e){
            throw Error(`Error`)
        }

    }
    async removeUser(){
        try {
            await this.open()
                const userCount = await this.usersItem.length
            if (!userCount){
                throw Error('user = null')
            }
            await this.usersItem[0].$('#remove').click()
            await browser.executeAsync((done) => {
                setTimeout(done, 500)
            })
            const userContAfterDelete = await this.usersItem.length
            // console.log(userContAfterDelete)

        }catch (e){
            throw Error(`${e.message}`)
        }
    }
    async updateUser(username: string, name: string){
        try {
            await this.open()
            const userCount = await this.usersItem.length
            if (!userCount){
                throw Error('user = null')
            }
            await this.usersItem[0].$('#updatauser').click()
            await this.nameI.setValue(name)
            await this.usernameI.setValue(username)
            await this.change.click()
            await browser.executeAsync((done) => {
                setTimeout(done, 500)
            })
        }catch (e){
            throw Error(`${e.message}`)
        }
    }

    public open () {
        return super.open('/main');
    }
}

export default new MainScreen();
