import { Component, OnInit, Input, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params, Router, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from './../../../../data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'artist-albums',
  templateUrl: './artist-albums.component.html',
  styleUrls: ['./artist-albums.component.css'],
  animations: [





    trigger('color-white', [
      state('true', style({
        color: 'white',
        fill: 'white'
      })),state('false', style({
        color: '',
        fill: ''
      })),
      transition('* => hover',
        animate('500ms 500ms ease-out'))
    ]),

    trigger('color-blue', [
      state('true', style({
        backgroundColor: 'rgba(81,157,255,0.9)',
        fill: 'rgba(81,157,255,0.9)'
      })),
      state('false', style({
        backgroundColor: '',
        fill: ''
      })),
      transition('* => hover',
        animate('500ms 500ms ease-out'))
    ])
  ],
})
export class ArtistAlbumsComponent implements OnInit {

  // Animation States
  state: string = 'out';
  hover: boolean = false;

  hoverState(x){
    return this.hover = x;

  }

  artistName: any = null;
  artistInfo: any = null;
  albumsToDisplay: any = null;
  artistData = this.dataService.data.artists;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private  cdRef:ChangeDetectorRef

  ){  }

  // Goes to this albums page
  goToDetailPage(x){
    this.router.navigate(['albums', x.name ])
  }

  // Get all the albums in the entire database
  getAlbums = this.artistData.reduce(
    (acc: any, next: any) => {
      next.albums.forEach(album => {
        acc.push(album);
      });
    return acc;
  }, []);


  getArtistInfo(artistName: any) {
    return this.artistData.filter( artist => artist.artistName === artistName );
  }

  // filter those albums by artistName
  getAlbumsByArtist(artistName: any) {
    return this.getAlbums.filter (album => album.artistName === artistName);
  }


  ngOnInit(){
     this.artistName = this.route.snapshot.params['artistName'];
     this.albumsToDisplay = this.getAlbumsByArtist(this.artistName);
     this.artistInfo = this.getArtistInfo(this.artistName);
  }

}
