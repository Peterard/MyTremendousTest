function getGoalsScored(){
  $("#match-results-table").find(".score");

  var goalArray= [];
  var opponentArray= [];

  $("td.score").each(function(){
    var score = $(this).val();
    var goalscored;
    var opponent;
    if($(this).parents(".match-result").find(".home-team").val() === $("#team-select").text()){
      goalscored = Number(score.replace("P", "").replace("E","").split("-")[0]);
      opponent = $(this).parents(".match-result").find(".away-team").val();
    }else if($(this).parents(".match-result").find(".away-team").val() === $("#team-select").text()){
      goalscored = Number(score.replace("P", "").replace("E","").split("-")[1]);
      opponent = $(this).parents(".match-result").find(".home-team").val();
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
