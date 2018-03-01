import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../../data.service';
import { SharedService } from './../../../../shared.service';
import { ArtistPageComponent } from './../artistpage.component';


@Component({
  selector: 'allsongs',
  templateUrl: './all-songs.component.html',
  styleUrls: ['./all-songs.component.css']
})
export class AllSongsComponent implements OnInit {

  artistData: any = this.dataService.data.artists;
  dataFromArtistPage: any = this.artistPageData;
  artistName: any = null;
  artistsSongs: any = null;

  constructor(
    private dataService: DataService,
    private sharedService: SharedService,
    private artistPageData: ArtistPageComponent
  ) { }

  ngOnInit() {
    this.artistName = this.dataFromArtistPage.artistName;
    this.artistsSongs = this.getSongs.filter( artist => artist.artistName === this.artistName);
    console.log( this.artistsSongs)
  }

  // Gets the object for each song that is selected
  getSong(x){
    console.log(x);
    this.sharedService.emitChange(x);
  }

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

}
