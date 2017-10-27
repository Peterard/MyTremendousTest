function getGoalsScored(){
  $("#match-results-table").find(".score");

  var goalArray = [];
  var opponentArray = [];

  $("td.score").each(function(){
    var score = $(this).text();
    var goalsScored;
    var opponent;
    var homeTeam = $(this).parents(".match-result").find(".home-team").text().replace("  ","");
    var awayTeam = $(this).parents(".match-result").find(".away-team").text().replace("  ","");
    homeTeam = homeTeam.slice(1, homeTeam.length - 1);
    awayTeam = awayTeam.slice(1, awayTeam.length);
    if($("#team-select option:selected").text() === homeTeam){
      goalsScored = Number(score.replace("P", "").replace("E","").split("-")[0]);
      opponent = awayTeam;
    }else if($("#team-select option:selected").text() === awayTeam){
      goalsScored = Number(score.replace("P", "").replace("E","").split("-")[1]);
      opponent = homeTeam;
    }
    var arrayCounter = goalArray.length;
    goalArray[arrayCounter] = goalsScored;
    opponentArray[arrayCounter] = opponent;
  });

  var goalsScored = {labels:opponentArray, data:goalArray};

  return goalsScored;
}

function getGoalsConceded(){
  $("#match-results-table").find(".score");

  var goalArray = [];
  var opponentArray = [];

  $("td.score").each(function(){
    var score = $(this).text();
    var goalsConceded;
    var opponent;
    var homeTeam = $(this).parents(".match-result").find(".home-team").text().replace("  ","");
    var awayTeam = $(this).parents(".match-result").find(".away-team").text().replace("  ","");
    homeTeam = homeTeam.slice(1, homeTeam.length - 1);
    awayTeam = awayTeam.slice(1, awayTeam.length);
    if($("#team-select option:selected").text() === homeTeam){
      goalsConceded = Number(score.replace("P", "").replace("E","").split("-")[1]);
      opponent = awayTeam;
    }else if($("#team-select option:selected").text() === awayTeam){
      goalsConceded = Number(score.replace("P", "").replace("E","").split("-")[0]);
      opponent = homeTeam;
    }
    var arrayCounter = goalArray.length;
    goalArray[arrayCounter] = goalsConceded;
    opponentArray[arrayCounter] = opponent;
  });

  var goalsConceded = {labels:opponentArray, data:goalArray};

  return goalsConceded;
}

function getGoalDifference(){
  $("#match-results-table").find(".score");

  var goalArray = [];
  var opponentArray = [];

  $("td.score").each(function(){
    var score = $(this).text();
    var goalDifference;
    var opponent;
    var homeTeam = $(this).parents(".match-result").find(".home-team").text().replace("  ","");
    var awayTeam = $(this).parents(".match-result").find(".away-team").text().replace("  ","");
    homeTeam = homeTeam.slice(1, homeTeam.length - 1);
    awayTeam = awayTeam.slice(1, awayTeam.length);
    if($("#team-select option:selected").text() === homeTeam){
      goalDifference = Number(score.replace("P", "").replace("E","").split("-")[0]) - Number(score.replace("P", "").replace("E","").split("-")[1]) ;
      opponent = awayTeam;
    }else if($("#team-select option:selected").text() === awayTeam){
      goalDifference = Number(score.replace("P", "").replace("E","").split("-")[1]) - Number(score.replace("P", "").replace("E","").split("-")[0]);
      opponent = homeTeam;
    }
    var arrayCounter = goalArray.length;
    goalArray[arrayCounter] = goalDifference;
    opponentArray[arrayCounter] = opponent;
  });

  var goalDifference = {labels:opponentArray, data:goalArray};

  return goalDifference;
}
