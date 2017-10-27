function getGoalsScored(){
  var goalArray = [];
  var opponentArray = [];
  var dateArray = [];
  var competitonArray = [];

  $("td.score").each(function(){
    var score = $(this).text();
    var goalsScored;
    var opponent;
    var date;
    var competition;
    var homeTeam = $(this).parents(".match-result").find(".home-team").text().replace("  ","");
    var awayTeam = $(this).parents(".match-result").find(".away-team").text().replace("  ","");
    homeTeam = homeTeam.slice(1, homeTeam.length - 1);
    awayTeam = awayTeam.slice(1, awayTeam.length);
    if($("#team-select option:selected").text() === homeTeam){
      goalsScored = Number(score.replace("P", "").replace("P", "").replace("E","").replace("E","").split("-")[0]);
      opponent = awayTeam;
      date = $(this).parents(".match-result").find(".date-cell").text()
      competition = $(this).parents(".match-result").find(".competition").text()
    }else if($("#team-select option:selected").text() === awayTeam){
      goalsScored = Number(score.replace("P", "").replace("P", "").replace("E","").replace("E","").split("-")[1]);
      opponent = homeTeam;
      date = $(this).parents(".match-result").find(".date-cell").text()
      competition = $(this).parents(".match-result").find(".competition").text()
    }
    var arrayCounter = goalArray.length;
    goalArray[arrayCounter] = goalsScored;
    opponentArray[arrayCounter] = opponent;
    dateArray[arrayCounter] = date;
    competitonArray[arrayCounter] = competition;
  });

  var goalsScored = {labels:opponentArray, data:goalArray, dates:dateArray, competitions:competitonArray};

  return goalsScored;
}

function getGoalsConceded(){

  var goalArray = [];
  var opponentArray = [];
  var dateArray = [];
  var competitonArray = [];

  $("td.score").each(function(){
    var score = $(this).text();
    var goalsConceded;
    var opponent;
    var date;
    var competition;
    var homeTeam = $(this).parents(".match-result").find(".home-team").text().replace("  ","");
    var awayTeam = $(this).parents(".match-result").find(".away-team").text().replace("  ","");
    homeTeam = homeTeam.slice(1, homeTeam.length - 1);
    awayTeam = awayTeam.slice(1, awayTeam.length);
    if($("#team-select option:selected").text() === homeTeam){
      goalsConceded = Number(score.replace("P", "").replace("P", "").replace("E","").replace("E","").split("-")[1]);
      opponent = awayTeam;
      date = $(this).parents(".match-result").find(".date-cell").text()
      competition = $(this).parents(".match-result").find(".competition").text()
    }else if($("#team-select option:selected").text() === awayTeam){
      goalsConceded = Number(score.replace("P", "").replace("P", "").replace("E","").replace("E","").split("-")[0]);
      opponent = homeTeam;
      date = $(this).parents(".match-result").find(".date-cell").text()
      competition = $(this).parents(".match-result").find(".competition").text()
    }
    var arrayCounter = goalArray.length;
    goalArray[arrayCounter] = goalsConceded;
    opponentArray[arrayCounter] = opponent;
    dateArray[arrayCounter] = date;
    competitonArray[arrayCounter] = competition;
  });

  var goalsConceded = {labels:opponentArray, data:goalArray, dates:dateArray, competitions:competitonArray};

  return goalsConceded;
}

function getGoalDifference(){

  var goalArray = [];
  var opponentArray = [];
  var dateArray = [];
  var competitonArray = [];

  $("td.score").each(function(){
    var score = $(this).text();
    var goalDifference;
    var opponent;
    var date;
    var competition;
    var homeTeam = $(this).parents(".match-result").find(".home-team").text().replace("  ","");
    var awayTeam = $(this).parents(".match-result").find(".away-team").text().replace("  ","");
    homeTeam = homeTeam.slice(1, homeTeam.length - 1);
    awayTeam = awayTeam.slice(1, awayTeam.length);
    if($("#team-select option:selected").text() === homeTeam){
      goalDifference = Number(score.replace("P", "").replace("P", "").replace("E","").replace("E","").split("-")[0]) - Number(score.replace("P", "").replace("P", "").replace("E","").replace("E","").split("-")[1]) ;
      opponent = awayTeam;
      date = $(this).parents(".match-result").find(".date-cell").text()
      competition = $(this).parents(".match-result").find(".competition").text()
    }else if($("#team-select option:selected").text() === awayTeam){
      goalDifference = Number(score.replace("P", "").replace("P", "").replace("E","").replace("E","").split("-")[1]) - Number(score.replace("P", "").replace("P", "").replace("E","").replace("E","").split("-")[0]);
      opponent = homeTeam;
      date = $(this).parents(".match-result").find(".date-cell").text()
      competition = $(this).parents(".match-result").find(".competition").text()
    }
    var arrayCounter = goalArray.length;
    goalArray[arrayCounter] = goalDifference;
    opponentArray[arrayCounter] = opponent;
    dateArray[arrayCounter] = date;
    competitonArray[arrayCounter] = competition;
  });

  var goalDifference = {labels:opponentArray, data:goalArray, dates:dateArray, competitions:competitonArray};

  return goalDifference;
}
