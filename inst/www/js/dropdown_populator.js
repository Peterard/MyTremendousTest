

      function populateDropdowns(){
      populateCountries();
      populateLeagues();
      populateTeams();

        $("#country-select").on("change", function(){
          populateLeagues();
        });

        $("#country-select").on("change", function(){
          populateTeams();
        });

        $("#league-select").on("change", function(){
          populateTeams();
        });
      }

function populateTeams(){
    var teamOptionsElement = "";

     var listOfLeagues = countryToLeagueJson[$("#country-select").val()];
        if($("#league-select").val() === "ALL_LEAGUES"){
          for(var j = 0; j < Object.keys(listOfLeagues).length;j++){

            var leagueName = listOfLeagues[Object.keys(listOfLeagues)[j]];
            var listOfTeams = leagueName[Object.keys(leagueName)[0]];
            for (var i = 0; i < Object.keys(listOfTeams).length; i++) {
              var teamUrl = Object.keys(listOfTeams)[i];
              var teamName = listOfTeams[teamUrl];
                  if(!teamOptionsElement.includes(teamUrl)){
                      teamOptionsElement = teamOptionsElement + '<option value="' + teamUrl + '">' + teamName + '</option>';
                  }
            }
         }
       }else{
        var leagueName = listOfLeagues[$("#league-select").val()];
        var listOfTeams = leagueName[Object.keys(leagueName)[0]];

        for (var i = 0; i < Object.keys(listOfTeams).length; i++) {
          var teamUrl = Object.keys(listOfTeams)[i];
          var teamName = listOfTeams[teamUrl];
          teamOptionsElement = teamOptionsElement + '<option value="' + teamUrl + '">' + teamName + '</option>';
        }
      }

    $("#team-select").empty();
    $("#team-select").append(teamOptionsElement);
}

function populateLeagues(){

            var leagueOptionsElement = '<option value="ALL_LEAGUES">All</option>';

            var listOfLeagues = countryToLeagueJson[$("#country-select").val()];

            for (var i = 0; i < Object.keys(listOfLeagues).length; i++) {
              var leagueUrl = Object.keys(listOfLeagues)[i];
              var leagueName = Object.keys(listOfLeagues[leagueUrl])[0];
              leagueOptionsElement = leagueOptionsElement + '<option value="' + leagueUrl + '">' + leagueName + '</option>';
          }

            $("#league-select").empty();
            $("#league-select").append(leagueOptionsElement);

}

function populateCountries(){
          var countryOptionsElement = "";

          for (var i = 0; i < Object.keys(countryToLeagueJson).length; i++) {
              var countryName = Object.keys(countryToLeagueJson)[i];
              countryOptionsElement = countryOptionsElement + '<option value="' + countryName + '">' + countryName + '</option>';
          }

          $("#country-select").empty();
          $("#country-select").append(countryOptionsElement);
}
