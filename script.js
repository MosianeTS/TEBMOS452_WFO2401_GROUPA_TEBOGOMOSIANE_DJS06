
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]; 

// Number 1
provinces.forEach(province => console.log(province))
names.forEach(name => console.log(name))
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// Number 2
console.log(provinces.map(province => province.toUpperCase()))

// Number 3
names.map(name => console.log(name.length))

// Number 4
console.log(provinces.sort())

// Number 5
console.log((provinces.filter(province => !province.includes('Cape'))).length)

// Number 6
const containsS = names.map(name => {
  return name.split('').some(char => char.toLowerCase() === 's');
});

// Number 7

const namesToProvinces = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});

console.log(namesToProvinces);

console.log(containsS);

// Single Console.log Exercises

// Number 1

console.log(
  products.forEach(product => console.log(product.product))
);

// Number 2
console.log(products.filter(product => product.product.length <= 5));

// Number 3
console.log(
  products
      .filter(product => product.price && !isNaN(product.price))  
      .map(product => ({ ...product, price: Number(product.price) })) 
      .reduce((total, product) => total + product.price, 0)  
);

// Number 4

console.log(
  products.reduce((concatenatedNames, product) => concatenatedNames + product.product, '')
);

// Number 5

console.log(
  (() => {
      const validPrices = products.filter(product => product.price && !isNaN(product.price));
      const highestPrice = Math.max(...validPrices.map(product => Number(product.price)));
      const lowestPrice = Math.min(...validPrices.map(product => Number(product.price)));
      return `Highest: ${highestPrice}. Lowest: ${lowestPrice}.`;
  })()
);

// Number 6
console.log(
  Object.entries(products).reduce((acc, [index, product]) => {
      acc[index] = { name: product.product, cost: product.price };
      return acc;
  }, [])
);

