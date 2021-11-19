'use strict';

const GetProductsByClientUseCase = require('../../../../../src/BoundedContext/Products/Application/GetProductsByClientUseCase');
const AxiosProductRepository = require('../../../../../src/BoundedContext/Products/Infrastructure/AxiosProductRepository');

class GetProductsByClientController {
    static async __invoke(req, res) {
        try {
            const getProductsByClientUseCase = new GetProductsByClientUseCase(new AxiosProductRepository());
            const data = await getProductsByClientUseCase.__invoke(req.params.id);
            return res.send(data);
        } catch (error) {
            return res.status(400).send(error);
        }
    }
}

module.exports = GetProductsByClientController;