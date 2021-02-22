/* eslint-disable class-methods-use-this */
import axios from 'axios';

const URL = 'http://localhost:3000/user';

class AuthService {
  static async login(email, password) {
    const res = await axios
      .post(`${URL}/login`, { email, password })
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem('user', JSON.stringify(res.data));
        }
      })
      .catch((error) => console.error(error));
    return res;
  }

  static async registre(name, email, password) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify(name, email, password);
    const res = await axios
      .post(`${URL}/register`, body, config)
      .then((res) => {
        console.log('Exito', res);
      })
      .catch((error) => console.error(error));
    return res;
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  logout() {
    localStorage.removeItem('user');
  }
}

export default new AuthService();
