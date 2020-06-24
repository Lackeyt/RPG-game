import {Character} from './../src/RPG-game.js';

describe('Character', () => {
  let reusablePlayer;

  beforeEach(() => {
    reusablePlayer = new Character(1, 2, 5, "player");
  })

  test("When user creates a player character, a new object is made with the player's level = 1, strength = 2, health = 5, current health = 5, type = 'player'", () => {
    expect(reusablePlayer.strength).toEqual(2);
    expect(reusablePlayer.health).toEqual(5);
    expect(reusablePlayer.currentHealth).toEqual(5);
    expect(reusablePlayer.level).toEqual(1);
    expect(reusablePlayer.type).toEqual("player");
  });

  test("If a user selects the 'Doing Damage' class, their strength = 5 and health/current health = 5", () => {
    reusablePlayer.chooseStrengthClass();
    expect(reusablePlayer.strength).toEqual(5);
  });

  test("If a user selects the 'Staying Alive' class, their strength = 2 and health/current health = 11", () => {
    reusablePlayer.chooseHealthClass();
    expect(reusablePlayer.health).toEqual(11);
    expect(reusablePlayer.currentHealth).toEqual(11);
  });

  test("When 'start battle' is selected, create an enemy object with health = player health, current health = player health, Strength = player strength", () => {
    const enemy = new Character(reusablePlayer.level, reusablePlayer.strength, reusablePlayer.health, "enemy")
    expect(enemy.strength).toEqual(2);
    expect(enemy.health).toEqual(5);
    expect(enemy.currentHealth).toEqual(5);
    expect(enemy.level).toEqual(1);
    expect(enemy.type).toEqual("enemy");
  });
});

describe('Battle', () => {
  let reusablePlayer;
  let reusableEnemy;
  let reusableBattle;

  beforeEach(() => {
    reusablePlayer = new Character(1, 2, 5, "player");
    reusableEnemy = new Character(reusablePlayer.level, reusablePlayer.strength, reusablePlayer.health, "enemy");
    reusableBattle = new Battle(reusablePlayer, reusableEnemy);
  })

  test(" When 'start battle' is selected, create a battle object with combatants = [player, enemy]", () => {
    expect(reusableBattle.combatants).toEqual([reusablePlayer, reusableEnemy])
  });
});
