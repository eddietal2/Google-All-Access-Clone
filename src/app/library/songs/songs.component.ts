import { Component, OnInit } from '@angular/core';
import { DataService } from './../../data.service';

@Component({
  selector: 'songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  artistData = this.dataService.data.artists;

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


  // In the song array of objects that is made from 'getSongs', gets the
  // name property of each object and reduces it to a single array
  getSongNames = this.getSongs.reduce( (a, b) => {
    a.push(b.name);
      return a.sort(); // sorts songs in alphabetical order
  }, []);




  ngOnInit() {
    console.log(this.getSongNames);
  }

}
