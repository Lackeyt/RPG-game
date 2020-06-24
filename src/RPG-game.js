//Business Logic
//Create New Character Constructor
export function Character(level, damage, health) {
  this.level = level;
  this.damage = damage;
  this.health = health; 
  this.currentHealth = health;
  //this.xp = xp;
}

Character.prototype.chooseDamageClass = function(){
  this.damage += 3;
}

Character.prototype.chooseHealthClass = function(){
  this.health += 6;
  this.currentHealth +=6
}