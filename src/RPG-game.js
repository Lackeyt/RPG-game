//Business Logic
//Create New Character Constructor
export function Character(level, strength, health, type) {
  this.level = level;
  this.strength = strength;
  this.health = health; 
  this.currentHealth = health;
  this.type = type;
}

Character.prototype.chooseStrengthClass = function(){
  this.strength += 3;
}

Character.prototype.chooseHealthClass = function(){
  this.health += 6;
  this.currentHealth +=6
}

export function Battle(player, enemy){
  this.combatants = [player, enemy]
}

Battle.prototype.playerAttack = function(){
  let damage
  damage = this.combatants[0].strength + Math.floor(Math.random() * (4-1+1)) + 1
  return damage
}