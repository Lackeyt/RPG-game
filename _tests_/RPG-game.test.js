import {Character} from './../src/RPG-game.js';
import {Battle} from './../src/RPG-game.js';

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

  test("When 'start battle' is selected, create a battle object with combatants = [player, enemy]", () => {
    expect(reusableBattle.combatants).toEqual([reusablePlayer, reusableEnemy])
  });

  test("When player clicks 'attack', calculate damage = player strength + random int (1-4)", () => {
    expect(reusableBattle.attack(reusablePlayer)).toBeGreaterThanOrEqual(3)
    expect(reusableBattle.attack(reusablePlayer)).toBeLessThanOrEqual(6)
  });

  test("after player attack, calculate enemy damage = enemy strength + random int (1-2)", () => {
    expect(reusableBattle.attack(reusableEnemy)).toBeGreaterThanOrEqual(3)
    expect(reusableBattle.attack(reusableEnemy)).toBeLessThanOrEqual(4)
  });

  test("Enemy current health is reduced by the damage roll of the player", () => {
    reusableBattle.attack(reusablePlayer)
    expect(reusableBattle.combatants[1].currentHealth).toBeGreaterThanOrEqual(-1)
    expect(reusableBattle.combatants[1].currentHealth).toBeLessThanOrEqual(2)
  });

  test("Player current health is reduced by the damage roll of the Enemy", () => {
    reusableBattle.attack(reusableEnemy)
    expect(reusableBattle.combatants[0].currentHealth).toBeGreaterThanOrEqual(1)
    expect(reusableBattle.combatants[0].currentHealth).toBeLessThanOrEqual(2)
  });

  test("if enemy current health is <= 0, battle ends and 'victory' screen is displayed", () => {
    const dyingEnemy = new Character (1, 2, 1, "enemy")
    const battle = new Battle (reusablePlayer, dyingEnemy)
    battle.attack(reusablePlayer)
    expect(battle.isCharacterAlive(dyingEnemy)).toEqual(false)
  });

  test("if enemy current health is <= 0, battle ends and 'victory' screen is displayed", () => {
    const dyingPlayer = new Character (1, 2, 1, "player")
    const battle = new Battle (dyingPlayer, reusableEnemy)
    battle.attack(reusableEnemy)
    expect(battle.isCharacterAlive(dyingPlayer)).toEqual(false)
  });

});
