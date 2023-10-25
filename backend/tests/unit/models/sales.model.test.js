const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');
const { mockSalesList, mockSaleById } = require('../../mocks');

describe('Testes Unitários - MODEL SALES', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Retorna corretamente uma lista das vendas', async function () {
    sinon.stub(connection, 'execute').resolves([mockSalesList]);

    const result = await salesModel.findAll();

    expect(result).to.be.equal(mockSalesList);
  });
  it('Retorna corretamente uma venda', async function () {
    sinon.stub(connection, 'execute').resolves([mockSaleById]);

    const result = await salesModel.findById(1);

    expect(result).to.be.equal(mockSaleById);
  });
});