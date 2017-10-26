function getGoalsScored(){
  $("#match-results-table").find(".score");

  var goalArray = [];
  var opponentArray = [];

  $("td.score").each(function(){
    var score = $(this).text();
    var goalscored;
    var opponent;
    var homeTeam = $(this).parents(".match-result").find(".home-team").text().replace("  ","");
    var awayTeam = $(this).parents(".match-result").find(".away-team").text().replace("  ","");
    console.log("'"+homeTeam.slice(1,  homeTeam.length - 1)+"'");
    console.log("'"+$("#team-select option:selected").text()+"'");
    homeTeam = homeTeam.slice(1, homeTeam.length - 1);
    awayTeam = awayTeam.slice(1, homeTeam.length - 1);
    console.log($("#team-select option:selected").text() == homeTeam)
    console.log($("#team-select option:selected").text() === homeTeam)
    if($("#team-select option:selected").text() == homeTeam){
      goalscored = Number(score.replace("P", "").replace("E","").split("-")[0]);
      console.log(goalscored)
      opponent = $(this).parents(".match-result").find(".away-team").val();
      console.log(opponent)
    }else if($("#team-select option:selected").text() == awayTeam){
      goalscored = Number(score.replace("P", "").replace("E","").split("-")[1]);
      console.log(goalscored)
      opponent = $(this).parents(".match-result").find(".home-team").val();
      console.log(opponent)
    }
    var arrayCounter = goalArray.length;
    goalArray[arrayCounter] = goalscored;
    opponentArray[arrayCounter] = opponent;
  });

  var goalsScored = {labels:opponentArray, data:goalArray};
  console.log("goalsScored")
  console.log(goalsScored)

  return goalsScored;
}
