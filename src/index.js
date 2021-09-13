const cities = ['Ciudad de México', 'Bogotá', 'Lima', 'Buenos Aires', 'San Salvador'];

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string;
};


const reverseStringAsync = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error('Error!'));
    }
    resolve(str.split('').reverse().join(''));
  });
};


module.exports = randomString;
