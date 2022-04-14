//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class TVShow{
  constructor(showName, numberOfEpisodes, releaseDate, showGenre){
    this.showName = showName
    this.numberOfEpisodes = numberOfEpisodes
    this.releaseDate = releaseDate
    this.showGenre = showGenre
  }
  playShow(){
    console.log('Play')
  }
  pauseShow(){
    console.log('Pause.')
  }
  reminderToWatchShow(){
    console.log(`Time to watch ${this.showName}`)
  }
}