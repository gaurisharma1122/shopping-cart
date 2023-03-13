import faker from "faker";

faker.seed(100);

export const productsArray= [...Array(24)].map(()=>({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image()
}));