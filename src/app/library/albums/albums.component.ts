import { Component, OnInit } from '@angular/core';
import { DataService } from './../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers: [DataService]
})
export class AlbumsComponent implements OnInit {

  constructor(
              private dataService: DataService,
              private router: Router
            ) { }

  artistData = this.dataService.data.artists;

// Get Albums from JSON
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


 goToDetailPage(album){
   this.router.navigate(['albums', album.name ])
 }

  ngOnInit() {

  }

}
