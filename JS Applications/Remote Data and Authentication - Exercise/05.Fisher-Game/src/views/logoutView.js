import { logout } from '../services/userService.js';
import { homeView } from './homeView.js';

console.log('logout');
export const logoutView = async (ctx) => {
    await logout();
    ctx.page.redirect('/home');
}
