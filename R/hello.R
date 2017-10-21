#' Hello World
#' 
#' Basic hello world function to be called from the demo app
#' 
#' @export
#' @param myname your name. Required.
hello <- function(myname = ""){
  if(myname == ""){
    stop("Tell me your name!")
  }
  
  library(rvest)

URL <- paste("http://int.soccerway.com/",teamDF$TeamUrls[1],"/matches/", sep="")
WS <- read_html(URL)

rawTableDataNewNewDate <- WS %>%
  html_nodes(xpath = "//div[@id='page_team_1_block_team_matches_3']//table[contains(@class, 'matches')]//tbody//tr[contains(@class, 'match')]//td[contains(@class, 'full-date')]")

rawTableDataNewNewHomeTeam <- WS %>%
  html_nodes(xpath = "//div[@id='page_team_1_block_team_matches_3']//table[contains(@class, 'matches')]//tbody//tr[contains(@class, 'match')]//td[contains(@class, 'team-a')]//a")

rawTableDataNewNewScore <- WS %>%
  html_nodes(xpath = "//div[@id='page_team_1_block_team_matches_3']//table[contains(@class, 'matches')]//tbody//tr[contains(@class, 'match')]//td[contains(@class, 'score')]//a")

rawTableDataNewNewAwayTeam <- WS %>%
  html_nodes(xpath = "//div[@id='page_team_1_block_team_matches_3']//table[contains(@class, 'matches')]//tbody//tr[contains(@class, 'match')]//td[contains(@class, 'team-b')]//a")

rawTableDataNewNewAwayTeam <- WS %>%
  html_nodes(xpath = "//div[@id='page_team_1_block_team_matches_3']//table[contains(@class, 'matches')]//tbody//tr[contains(@class, 'match')]//td[contains(@class, 'competition')]//a")


scores <- gsub("\n","",gsub("  ","",html_text(rawTableDataNewNewScore)))
  
  list(
    message = scores
  )
}
