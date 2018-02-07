import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../data.service';
import { ActivatedRoute, Params, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-albumpage',
  templateUrl: './albumpage.component.html',
  styleUrls: ['./albumpage.component.css']
})
export class AlbumpageComponent implements OnInit {

  albumName:string = null;
  albumToDisplay: string;
  songsToDisplay: string;
  albumSongs: string;
  artistData = this.dataService.data.artists;

  // Gets all the Albums, and reduces them to a single array of albums
  getAlbums = this.artistData.reduce(
    (acc: any, next: any) => {
      next.albums.forEach(album => {
        acc.push(album);
      });
    return acc;
  }, []);

  getSongs = this.getAlbums.reduce(
    (acc: any, next: any) => {
      next.songs.forEach(song => {
        acc.push(song);
      });
    return acc;
  }, []);

  // Loops through all the albums in the getAlbums array, then returns the one
  // with the matching albumName
  getAlbumById(albumName: string){
    for (var i = 0; i <= this.getAlbums.length - 1; i++) {
      if (this.getAlbums[i].name === this.albumName) {
        return this.getAlbums[i];
      }
    }
  }

  // Loops through all albums and all the songs in the albums
  getSongsByArtist(albumSongs: string) {
    for (var i = 0; i <= this.getAlbums.length - 1; i++) {
      if (this.getAlbums[i].name === this.albumName) {
        if (this.getAlbums[i].songs) {
          return this.getAlbums[i].songs;
        }

      }
    }
  }

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private dataService: DataService
  ){
  }

  ngOnInit(){
    this.albumName = this.route.snapshot.params['albumName'];
    this.albumToDisplay = this.getAlbumById(this.albumName);
    this.songsToDisplay = this.getSongsByArtist(this.albumSongs)
    console.log(this.songsToDisplay);

    // if (this.albumId = this.getAlbums.name) {
    //   this.albumToDisplay = this.getAlbums;
    //   console.log(this.albumToDisplay);
    // }

  }
}
