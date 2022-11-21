import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import MainScreen from "../pageobjects/MainScreen.page";

describe('Main Screen', () => {
    it('createUser', async () => {
       await MainScreen.loadData('random','rand')
    });
    it('updateUser', async () =>{
        await MainScreen.updateUser('random','rand')
    });
    it('deleteUser', async () =>{
        await MainScreen.removeUser()
    });


});


