const { expect } = require('chai');
const sinon = require('sinon');
const { productsService } = require('../../../src/services');
const { productsModel } = require('../../../src/models');
const { mockProductList } = require('../../mocks');

describe('Testes Unitários - SERVICE PRODUTOS', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Retorna corretamente uma lista dos produtos e o status 200', async function () {
    sinon.stub(productsModel, 'findAll').resolves(mockProductList);

    const { status, data } = await productsService.findAll();

    expect(status).to.be.equal(200);
    expect(data).to.be.equal(mockProductList);
  });
  it('Retorna corretamente um produto e o status 200', async function () {
    sinon.stub(productsModel, 'findById').resolves(mockProductList[0]);

    const { status, data } = await productsService.findById(1);

    expect(status).to.be.equal(200);
    expect(data).to.deep.equal(mockProductList[0]);
  });
  it('Retorna status 400 e mensagem correta quando req não tem name', async function () {
    const body = {};
    const { status, data } = await productsService.insertProduct(body);

    expect(status).to.be.equal(400);
    expect(data).to.deep.equal({ message: '"name" is required' });
  });
});