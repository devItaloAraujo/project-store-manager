const mockProductList = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

const DATE = '2023-10-25T14:47:39.000Z';

const mockSalesList = [
  {
    saleId: 1,
    date: DATE,
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: DATE,
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: DATE,
    productId: 3,
    quantity: 15,
  },
];

const mockSaleById = [
  {
    date: DATE,
    productId: 1,
    quantity: 5,
  },
  {
    date: DATE,
    productId: 2,
    quantity: 10,
  },
];

module.exports = {
  mockProductList,
  mockSalesList,
  mockSaleById,
};