import axios from 'axios';

const serverURL = 'http://localhost:4000'

const API = {
    getPurchase: function() {
        return axios.get(`${serverURL}/api/purchases`);
    },

    createPurchase: function (payload) {
        return axios.post(`${serverURL}/api/purchases`, payload);
    }
}

export default API;