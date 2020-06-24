import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Character, Battle } from './../src/RPG-game.js';

//User Interface

function attackCycle(player, enemy, battle) {
  $("#playerDamageDone").html(`You hit the enemy for  ${battle.attack(player)} DAMAGE`);
  if (battle.isCharacterAlive(enemy) === false) {
    $("#battle").hide();
    $("#victoryScreen").show();
  } else {
    $("#enemyDamageDone").html(`Enemy hit you for ${battle.attack(enemy)} DAMAGE`);
    if (battle.isCharacterAlive(player) === false) {
      $("#battle").hide();
      $("#gameOver").show();
    }
  }
}

$(document).ready(function() {
  let player;
  let enemy;
  let battle;
  $("#newGame").click(function(event){
    event.preventDefault();
    player = new Character(1, 2, 5, "player");
    $("#startMenu").hide();
    $("#charCreation").show();
    $("#charCreationDisplay").append(`Level: ${player.level}<br>Strength: ${player.strength}<br>Health: ${player.health}`);
  });
  
  $("#plusDamage").click(function(event){
    event.preventDefault();
    player.chooseStrengthClass();
    $("#charCreation").hide();
    $("#charSummary").show();
    $("#charSummaryStats").html(`Level: ${player.level}<br>Strength: ${player.strength}<br>Health: ${player.health}`);
  })

  $("#plusHealth").click(function(event){
    event.preventDefault();
    player.chooseHealthClass();
    $("#charCreation").hide();
    $("#charSummary").show();
    $("#charSummaryStats").html(`Level: ${player.level}<br>Strength: ${player.strength}<br>Health: ${player.health}`);
  })

  $("#startBattle").click(function(event){
    event.preventDefault();
    enemy = new Character(player.level, player.strength, player.health, "enemy");
    battle = new Battle(player, enemy);
    $("#charSummary").hide();
    $("#battle").show();
    $("#playerBattleStats").html(`Level: ${player.level}<br>Health: ${player.currentHealth}/${player.health}<br>Strength: ${player.strength}`)
    $("#enemyBattleStats").html(`Level: ${enemy.level}<br>Health: ${enemy.currentHealth}/${enemy.health}<br>Strength: ${enemy.strength}`)
  })

  $("#battleAttack").click(function(event){
    event.preventDefault();
    attackCycle(player, enemy, battle)
    $("#playerBattleStats").html(`Level: ${player.level}<br>Health: ${player.currentHealth}/${player.health}<br>Strength: ${player.strength}`)
    $("#enemyBattleStats").html(`Level: ${enemy.level}<br>Health: ${enemy.currentHealth}/${enemy.health}<br>Strength: ${enemy.strength}`)
  })
});

