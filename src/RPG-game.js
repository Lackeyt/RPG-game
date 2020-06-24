//Business Logic
//Create New Character Constructor
export function Character(damage, health, level, xp) {
  this.damage = damage;
  this.health = health; 
  this.level = level;
  this.xp = xp;
}

Character.prototype.chooseDamageClass = function(){
  this.damage += 3;
}