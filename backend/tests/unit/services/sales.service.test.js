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
});