import {Character} from './../src/RPG-game.js';

describe('Character', () => {
  let reusableCharacter;

  beforeEach(() => {
    reusableCharacter = new Character(1, 2, 5, "player");
  })

  test("When user creates a character, a new object is made with the character's level = 1, strength = 2, health = 5, current health = 5, type = 'player'", () => {
    expect(reusableCharacter.strength).toEqual(2);
    expect(reusableCharacter.health).toEqual(5);
    expect(reusableCharacter.currentHealth).toEqual(5);
    expect(reusableCharacter.level).toEqual(1);
    expect(reusableCharacter.type).toEqual("player");
  });

  test("If a user selects the 'Doing Damage' class, their strength = 5 and health/current health = 5", () => {
    reusableCharacter.chooseStrengthClass();
    expect(reusableCharacter.strength).toEqual(5);
  });

  test("If a user selects the 'Staying Alive' class, their strength = 2 and health/current health = 11", () => {
    reusableCharacter.chooseHealthClass();
    expect(reusableCharacter.health).toEqual(11);
    expect(reusableCharacter.currentHealth).toEqual(11);
  });

  test("When 'start battle' is selected, create an enemy object with health = player health, current health = player health, Strength = player strength", () => {
    const enemy = new Character(reusableCharacter.level, reusableCharacter.strength, reusableCharacter.health, "enemy")
    expect(enemy.strength).toEqual(2);
    expect(enemy.health).toEqual(5);
    expect(enemy.currentHealth).toEqual(5);
    expect(enemy.level).toEqual(1);
    expect(enemy.type).toEqual("enemy");
  });
});
