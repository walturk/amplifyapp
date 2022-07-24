import { combineReducers } from "redux";

// Front
import Layout from "./layouts/reducer";

// Authentication
import Login from "./auth/login/reducer";
import Account from "./auth/register/reducer";
import ForgetPassword from "./auth/forgetpwd/reducer";
import Profile from "./auth/profile/reducer";

//Calendar
//Chat
//Ecommerce

//Project

// Tasks
//Form advanced

//Crypto
import Crypto from "./crypto/reducer";

//TicketsList
//Crm

//Invoice

//Mailbox

const rootReducer = combineReducers({
    // public
    Layout,
    Login,
    Account,
    ForgetPassword,
    Profile,
    Crypto,
});

export default rootReducer;