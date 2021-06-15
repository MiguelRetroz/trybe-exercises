const { test, expect, describe } = require('@jest/globals');

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(_ => {
      const arrayAnimals = Animals.filter(animal => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);

const getListAnimals = type => (
  findAnimalsByType(type).then(list => list)
);

describe('Quando o tipo do animal, existe', () => {
  expect.assertions(2);

  test('Retorne a lista de animais', async () => {
    const listDogs = await getListAnimals('Dog');
    expect(listDogs[0].name).toBe('Dorminhoco');
    expect(listDogs[1].name).toBe('Soneca');
  });
});

describe('Quando o tipo do animal, não existe', () => {
  test('Retorne a messagem de erro', async () => {
    expect.assertions(1);
    try {
      await getListAnimals('Lion');
    } catch (error) {
      expect(error).toEqual({ error: 'Não possui esse tipo de animal.' });
    }
  });
});

describe('Testando Promise - findAnimalsByType', () => {
  describe('Quando o tipo do animal, existe', () => {
    test('Retorna uma lista de animais', () => {
      const listDogs = [
        { name: 'Dorminhoco', age: 1, type: 'Dog' },
        { name: 'Soneca', age: 2, type: 'Dog' },
      ];
      expect.assertions(1);
      return expect(getListAnimals('Dog')).resolves.toEqual(listDogs);
    });
  });

  describe('Quando o tipo do animal, não existe', () => {
    test('Retorna a mensagem de erro', () => {
      expect.assertions(1);
      return expect(getListAnimals('Lion')).rejects.toEqual({ error: 'Não possui esse tipo de animal.' });
    });
  });
});