import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:45072',
    //baseURL: 'https://1617a68e7701.ngrok.io',
    headers: {
        //"Content-Type": "application/x-www-form-urlencoded"
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
});