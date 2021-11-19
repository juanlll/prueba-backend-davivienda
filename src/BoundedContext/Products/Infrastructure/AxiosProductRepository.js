'use strict';
const IProductRepository = require('../Domain/Contracts/IProductRepository');
const axios = require('axios');

class AxiosProductRepository extends IProductRepository {
    constructor() {
        super();
    }

    searchByClient(clientId) {
        return axios.get(`https://my-json-server.typicode.com/stebanjimenezg/test/db?clientId=${clientId}`)
            .then(data => data.data.accounts != undefined && data.data.accounts.length > 0 ? data.data.accounts : [])
            .catch(e => {
                throw e;
            });
    }
}

module.exports = AxiosProductRepository;