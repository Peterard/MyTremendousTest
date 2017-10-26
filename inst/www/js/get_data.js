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
    console.log($(this).parents(".match-result").find(".home-team").text())
    console.log($("#team-select").text())
    if($(this).parents(".match-result").find(".home-team").text() === $("#team-select").text()){
      goalscored = Number(score.replace("P", "").replace("E","").split("-")[0]);
      console.log(goalscored)
      opponent = $(this).parents(".match-result").find(".away-team").val();
      console.log(opponent)
    }else if($(this).parents(".match-result").find(".away-team").text() === $("#team-select").text()){
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
