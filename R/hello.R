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

URL <- paste("http://int.soccerway.com/",myname,"/matches/", sep="")
WS <- read_html(URL)

rawTableDataDate <- WS %>%
  html_nodes(xpath = "//div[@id='page_team_1_block_team_matches_3']//table[contains(@class, 'matches')]//tbody//tr[contains(@class, 'match')]//td[contains(@class, 'full-date')]")

rawTableDataHomeTeam <- WS %>%
  html_nodes(xpath = "//div[@id='page_team_1_block_team_matches_3']//table[contains(@class, 'matches')]//tbody//tr[contains(@class, 'match')]//td[contains(@class, 'team-a')]//a")

rawTableDataScore <- WS %>%
  html_nodes(xpath = "//div[@id='page_team_1_block_team_matches_3']//table[contains(@class, 'matches')]//tbody//tr[contains(@class, 'match')]//td[contains(@class, 'score')]//a")

rawTableDataAwayTeam <- WS %>%
  html_nodes(xpath = "//div[@id='page_team_1_block_team_matches_3']//table[contains(@class, 'matches')]//tbody//tr[contains(@class, 'match')]//td[contains(@class, 'team-b')]//a")

rawTableDataTable <- WS %>%
  html_nodes(xpath = "//div[@id='page_team_1_block_team_matches_3']//table[contains(@class, 'matches')]")

rawTableDataCompetition <- WS %>%
  html_nodes(xpath = "//div[@id='page_team_1_block_team_matches_3']//table[contains(@class, 'matches')]//tbody//tr[contains(@class, 'match')]//td[contains(@class, 'competition')]//a")

scores <- data.frame(Date = html_text(rawTableDataDate), 
           Competition =  html_attr(rawTableDataCompetition, "title"),
           HomeTeam = html_attr(rawTableDataHomeTeam, "title"),
           Score = gsub("\n","",gsub(" ","",html_text(rawTableDataScore))),
           AwayTeam = html_attr(rawTableDataAwayTeam, "title"),
           Result = html_attr(rawTableDataScore, "class"),
           Url = html_attr(rawTableDataScore, "href"))
  
  list(
    message = scores
  )
}
