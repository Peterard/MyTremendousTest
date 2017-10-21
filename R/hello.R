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

rawTableData <- WS %>%
  html_nodes(xpath = "//div[@id='page_team_1_block_team_matches_3']//table[contains(@class, 'matches')]")

scores <- html_table(rawTableData)
  
  list(
    message = scores
  )
}
