import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Character } from './../src/RPG-game.js';

//User Interface
$(document).ready(function() {
  let player;
  let enemy;
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

  $("#startBattle").click(function(element){
    event.preventDefault();
    enemy = new Character(player.level, player.strength, player.health, "enemy");
    $("#charSummary").hide();
    $("#battle").show();
    $("#playerBattleStats").html(`Level: ${player.level}<br>Health: ${player.currentHealth}/${player.health}<br>Strength: ${player.strength}`)
    $("#enemyBattleStats").html(`Level: ${enemy.level}<br>Health: ${enemy.currentHealth}/${enemy.health}<br>Strength: ${enemy.strength}`)
  })
});

