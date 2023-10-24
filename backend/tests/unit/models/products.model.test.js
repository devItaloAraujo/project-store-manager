const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');
const { mockProductList } = require('../../mocks');

describe('Testes Unitários - MODEL PRODUTOS', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Retorna corretamente uma lista dos produtos', async function () {
    sinon.stub(connection, 'execute').resolves([mockProductList]);

    const result = await productsModel.findAll();

    expect(result).to.be.equal(mockProductList);
  });
  it('Retorna corretamente um produto', async function () {
    sinon.stub(connection, 'execute').resolves([[mockProductList[0]]]);

    const result = await productsModel.findById(1);

    expect(result).to.be.equal(mockProductList[0]);
  });
});