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

countryListURL <- vector();
countryListNames <- vector();

URL <- paste("http://int.soccerway.com/competitions/?ICID=TN_02", sep="")
WS <- read_html(URL)

rawTableDataNewNew <- WS %>%
  html_nodes(xpath = "//div[@id='page_competitions_1_block_competitions_index_club_domestic_4']//div[@class='row']//a")

countryListNames <- html_text(rawTableDataNewNew)
countryListURL <- html_attr(rawTableDataNewNew, "href")
  
  randomCountry <- gsub("\n","",gsub("  ","",countryListNames[sample(1:(length(countryListNames)), 1)]))

  
  list(
    message = paste("hello ",myname," in ", randomCountry, "! This certainly is", R.Version()$version.string)
  )
}
