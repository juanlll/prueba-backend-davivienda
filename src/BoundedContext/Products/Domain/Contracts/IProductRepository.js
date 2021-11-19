'use strict';

class IProductRepository {
    constructor() {
        if (!this.searchByClient) {
            throw new Error('Se requiere el metodo searchByClient(ClientId)');
        }
    }
}
module.exports = IProductRepository;