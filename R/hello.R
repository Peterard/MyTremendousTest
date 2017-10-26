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

  Sys.setenv(TZ='Asia/Tokyo')
  matchDates <- as.Date(html_text(rawTableDataDate), "%d/%m/%y")
  today <- as.Date(Sys.Date(), "%d/%m/%y")
  cutoff <- seq(today, length = 2, by = "-3 months")[2]
  matchSelector <- matchDates >= cutoff & matchDates <= today & unlist(lapply(gsub("\n","",gsub(" ","",html_text(rawTableDataScore))), function(x) grepl("-", x)))
  
  
  if(sum(matchSelector) < 3){
    numberOfMonths <- 4
    while (sum(matchSelector) < 3 && numberOfMonths < 24){
      cutoff <- seq(today, length = 2, by = paste("-",numberOfMonths," months", sep=""))[2]
      matchSelector <- matchDates >= cutoff
      numberOfMonths <- numberOfMonths + 1
    }
  }
  
scores <- data.frame(Date = html_text(rawTableDataDate[matchSelector]), 
           Competition =  html_attr(rawTableDataCompetition[matchSelector], "title"),
           HomeTeam = html_attr(rawTableDataHomeTeam[matchSelector], "title"),
           Score = gsub("\n","",gsub(" ","",html_text(rawTableDataScore[matchSelector]))),
           AwayTeam = html_attr(rawTableDataAwayTeam[matchSelector], "title"),
           Result = html_attr(rawTableDataScore[matchSelector], "class"),
           Url = html_attr(rawTableDataScore[matchSelector], "href"))
  
  list(
    message = scores
  )
}
