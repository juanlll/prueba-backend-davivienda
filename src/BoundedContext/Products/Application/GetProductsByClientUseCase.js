'use strict'
const ProductClientId = require('../Domain/ValueObjects/ProductClientId');

class GetProductsByClientUseCase {

    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async __invoke(id) {
        //deberia filtrar los productos que peretenecen a un cliente en especifico.
        //ejemplo: clientId = 550e8400-e29b-41d4-a716-446655440000
        const clientId = new ProductClientId(id).value;
        const products = await this.productRepository.searchByClient(clientId);
        return products;
    }
}
module.exports = GetProductsByClientUseCase;