const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;

chai.use(sinonChai);

const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');
const { mockProductList } = require('../../mocks');

describe('Testes Unitários - CONTROLLER PRODUTOS', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Retorna corretamente uma lista dos produtos e o status correto', async function () {
    sinon.stub(productsService, 'findAll').resolves({ status: 200, data: mockProductList });

    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub().returnsThis(),
    };

    await productsController.findAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockProductList);
  });

  it('Retorna corretamente um produto e o status', async function () {
    sinon.stub(productsService, 'findById').resolves({ status: 200, data: mockProductList[0] });

    const req = { params: { id: 1 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub().returnsThis(),
    };

    await productsController.findById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockProductList[0]);
  });
});