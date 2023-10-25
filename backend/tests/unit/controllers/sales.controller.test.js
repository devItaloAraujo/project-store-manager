const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;

chai.use(sinonChai);

const { salesService } = require('../../../src/services');
const { salesController } = require('../../../src/controllers');
const { mockSalesList, mockSaleById } = require('../../mocks');

describe('Testes Unitários - CONTROLLER SALES', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Retorna corretamente uma lista das vendas e o status correto', async function () {
    sinon.stub(salesService, 'findAll').resolves({ status: 200, data: mockSalesList });

    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub().returnsThis(),
    };

    await salesController.findAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockSalesList);
  });

  it('Retorna corretamente uma venda e o status', async function () {
    sinon.stub(salesService, 'findById').resolves({ status: 200, data: mockSaleById });

    const req = { params: { id: 1 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub().returnsThis(),
    };

    await salesController.findById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockSaleById);
  });
});