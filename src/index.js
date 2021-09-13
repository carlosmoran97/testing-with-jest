const cities = ['Ciudad de México', 'Bogotá', 'Lima', 'Buenos Aires', 'San Salvador'];

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string;
};

module.exports = randomString;
