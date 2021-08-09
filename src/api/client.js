import axios from 'axios';

export default axios.create({
    //baseURL: 'http://localhost:45072',
    baseURL: 'http://d23737a51f3b.ngrok.io',
    headers: {
        //"Content-Type": "application/x-www-form-urlencoded"
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
});