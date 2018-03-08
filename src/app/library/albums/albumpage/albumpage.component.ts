import { Component, OnInit, Output, EventEmitter, AfterViewInit, ChangeDetectorRef  } from '@angular/core';
import { DataService } from './../../../data.service';
import { ActivatedRoute, Params, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Location } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate, keyframes} from '@angular/animations';
import { SharedService } from './../../../shared.service';
import { RecentService } from './../../../recent.service';



@Component({
  selector: 'albumpage',
  templateUrl: './albumpage.component.html',
  styleUrls: ['./albumpage.component.css'],
  animations: [
    trigger('slide-in-pic', [
      state('out', style({
        transform: 'translateX(-100px)',
        opacity: '0'
      })),
      state('in', style({
        transform: 'translateX(1px)',
        opacity: '1'
      })),
      transition('out <=> in',
        animate('500ms ease-out'))
    ]),
    trigger('slide-in-info', [
      state('out', style({
        transform: 'translateX(100px)',
        opacity: '0'
      })),
      state('in', style({
        transform: 'translateX(1px)',
        opacity: '1'
      })),
      transition('out <=> in',
        animate('500ms ease-out'))
    ]),
    trigger('thumb-animation', [
      state('out', style({
        opacity: '0'
      })),
      state('in', style({
        opacity: '1'
      })),
      transition('out <=> in',
        animate('500ms ease-out'))
    ]),


  ]
})
export class AlbumpageComponent implements OnInit,  AfterViewInit  {


  state: string = 'out';
  plays: number = 0;
  clicked: boolean = false;
  isPlaying: boolean = false;
  song: any;
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

  // Navigates to this Album's Artist's ArtistPageComponent
  goToDetailPage(artistName){
    this.router.navigate(['artists', artistName ])
  }

  // Gets the object for each song that is selected
  getSong(song){
    this.sharedService.emitChange(song);
    this.recentService.emitChange(song);
    song.isPlaying = true;
    console.log(song)
  }



  addPlay(song){
    song.plays = (song.plays) ? song.plays + 1 : 1;
    console.log(song.plays)
}


  thumbsVisible: boolean = false;
  thumb: boolean = false;
  upSelected: boolean = false;
  downSelected: boolean = false;
  selected = "";

thumbs(song){
  song.thumb = !song.thumb;
  song.selected = 'selected';
  console.log("Thumb is: " + song.thumb);
  console.log("Thumb is: " + song.selected);
}


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private dataService: DataService,
    private sharedService: SharedService,
    private recentService: RecentService,
    private  cdRef:ChangeDetectorRef
  ){}

  ngOnInit(){
    this.albumName = this.route.snapshot.params['albumName'];
    this.albumToDisplay = this.getAlbumById(this.albumName);
    this.songsToDisplay = this.getSongsByArtist(this.albumSongs);
    console.log(this.clicked)
  }

  ngAfterViewInit() {
     this.state = (this.state === 'in' ? 'out' : 'in');
     this.cdRef.detectChanges();
  }
}
