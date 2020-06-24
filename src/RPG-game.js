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