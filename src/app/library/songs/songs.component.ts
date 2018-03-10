import { Component, OnInit } from '@angular/core';
import { DataService } from './../../data.service';
import { SharedService } from './../../shared.service';

@Component({
  selector: 'songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  constructor(private dataService: DataService,
              private sharedService: SharedService,) { }

  artistData = this.dataService.data.artists;
  plays: number = 0;
  clicked: boolean = false;
  isPlaying: boolean = false;
  thumbsVisible: boolean = false;
  thumb: boolean = null;


  // Gets all the albums from each artist and combines then into a single array
  getAlbums = this.artistData.reduce(
    (acc: any, next: any) => {
      next.albums.forEach(album => {
        acc.push(album);
      });
    return acc;
  }, []);

  // Gets all the data from all the albums, and reduces them to a single array
  // with all the songs
  getSongs = this.getAlbums.reduce(
    (acc: any, next: any) => {
      next.songs.forEach(song => {
        acc.push(song);
      });
    return acc;
  }, []);


  getSong(song){
    this.sharedService.emitChange(song);
    song.isPlaying = true;
  }



  addPlay(song){
    song.plays = (song.plays) ? song.plays + 1 : 1;
  }


  click(song, thumb) {
  if(thumb = "up") {
     song.thumb = true;
  }
  if(thumb = "down") {
    song.thumb = false;
  }

  console.log(song.thumb)
  console.log(thumb)
}




  ngOnInit() {
    console.log(this.getSongs.sort( song => song.name));
  }

}
