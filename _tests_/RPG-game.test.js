import {Character} from './../src/RPG-game.js';

describe('Character', () => {

  test('should create a new Character object with base values and a name', () => {
    const character = new Character("testName", 2, 5, 1, 0)
    expect(character.name).toEqual("testName")
    expect(character.damage).toEqual(2)
    expect(character.health).toEqual(5)
    expect(character.level).toEqual(1)
    expect(character.xp).toEqual(0)
  });
});