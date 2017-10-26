function getGoalsScored(){
  $("#match-results-table").find(".score");

  var goalArray = [];
  var opponentArray = [];

  $("td.score").each(function(){
    var score = $(this).text();
    console.log("score")
    console.log(score)
    var goalscored;
    var opponent;
    console.log($(this).parents(".match-result").find(".home-team").text().replace("  ",""))
    console.log($("#team-select option:selected").text() == $(this).parents(".match-result").find(".home-team").text().replace("  ",""))
    var homeTeam = $(this).parents(".match-result").find(".home-team").text().replace("  ","");
    var awayTeam = $(this).parents(".match-result").find(".away-team").text().replace("  ","");
    if(homeTeam === $("#team-select option:selected").text()){
      goalscored = Number(score.replace("P", "").replace("E","").split("-")[0]);
      console.log(goalscored)
      opponent = $(this).parents(".match-result").find(".away-team").val();
      console.log(opponent)
    }else if(awayTeam === $("#team-select option:selected").text()){
      goalscored = Number(score.replace("P", "").replace("E","").split("-")[1]);
      console.log(goalscored)
      opponent = $(this).parents(".match-result").find(".home-team").val();
      console.log(opponent)
    }
    var arrayCounter = goalArray.length;
    goalArray[arrayCounter.length] = goalscored;
    opponentArray[arrayCounter.length] = opponent;
  });

  var goalsScored = {labels:opponentArray, data:goalArray};
  console.log("goalsScored")
  console.log(goalsScored)

  return goalsScored;
}
