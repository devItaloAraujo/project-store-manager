const { expect } = require('chai');
const sinon = require('sinon');
const { salesService } = require('../../../src/services');
const { salesModel } = require('../../../src/models');
const { mockSalesList, mockSaleById } = require('../../mocks');

describe('Testes Unitários - SERVICE SALES', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Retorna corretamente uma lista das vendas e o status 200', async function () {
    sinon.stub(salesModel, 'findAll').resolves(mockSalesList);

    const { status, data } = await salesService.findAll();

    expect(status).to.be.equal(200);
    expect(data).to.be.equal(mockSalesList);
  });
  it('Retorna corretamente uma venda e o status 200', async function () {
    sinon.stub(salesModel, 'findById').resolves(mockSaleById);

    const { status, data } = await salesService.findById(1);

    expect(status).to.be.equal(200);
    expect(data).to.deep.equal(mockSaleById);
  });
  it('Retorna status 400 e mensagem correta quando req não tem productId', async function () {
    const body = [
      {
        quantity: 1,
      },
      {
        productId: 2,
        quantity: 5,
      },
    ];
    
    const { status, data } = await salesService.insertSale(body);

    expect(status).to.be.equal(400);
    expect(data).to.deep.equal({ message: '"productId" is required' });
  });
  it('Retorna status 400 e mensagem correta quando req não tem quantity', async function () {
    const body = [
      {
        productId: 2,
      },
    ];
    const { status, data } = await salesService.insertSale(body);

    expect(status).to.be.equal(400);
    expect(data).to.deep.equal({ message: '"quantity" is required' });
  });
  it('Retorna status 422 e mensagem correta quando req tem quantity negativa ou zero', async function () {
    const body = [
      {
        productId: 1,
        quantity: 0,
      },
      {
        productId: 2,
        quantity: 5,
      },
    ];
    const { status, data } = await salesService.insertSale(body);

    expect(status).to.be.equal(422);
    expect(data).to.deep.equal({ message: '"quantity" must be greater than or equal to 1' });
  });
  it('Retorna status 404 e mensagem correta quando req tem productId inexistente', async function () {
    const body = [
      {
        productId: 808,
        quantity: 1,
      },
    ];
    const { status, data } = await salesService.insertSale(body);

    expect(status).to.be.equal(404);
    expect(data).to.deep.equal({ message: 'Product not found' });
  });
});
