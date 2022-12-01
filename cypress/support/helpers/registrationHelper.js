import RegistrationPage from "../RegistrationPage";
import WelcomePage from '../WelcomePage';
import LoginPage from '../LoginPage';

export function registration() {
    const [email, password] = RegistrationPage.registerNewUser();
    WelcomePage.clickCookieConfirmButton();
    LoginPage.login(email, password);
}
