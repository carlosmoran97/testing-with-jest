const text = "Hola Mundo";
const fruits = ['apple', 'melon', 'banana'];

test('Debe contener un text', () => {
  expect(text).toMatch(/Mundo/);
});

test('Debe contener una banana', () => {
  expect(fruits).toContain('banana');
});

test('Debe ser mayor que "9"', () => {
  expect(10).toBeGreaterThan(9);
});

test('Debe ser verdadero', () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
  callback(str.split('').reverse().join(''));
};

test('Probar el callback', () => {
  reverseString('Hola', (str) => {
    expect(str).toBe('aloH');
  });
});

const reverseStringAsync = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error('Error!'));
    }
    resolve(str.split('').reverse().join(''));
  });
};

test('Probando la promesa', () => {
  reverseStringAsync('Hola')
    .then(str => {
      expect(str).toBe('aloH');
    });
});

test('Probando async/await', async () => {
  const str = await reverseStringAsync('hola');
  expect(str).toBe('aloh');
});
/*
afterEach(() => console.log('Después de cada prueba'));
afterAll(() => console.log('Después de todas las pruebas'));

beforeEach(() => console.log('Antes de cada prueba'));
beforeAll(() => console.log('Antes de todas las pruebas'));
*/