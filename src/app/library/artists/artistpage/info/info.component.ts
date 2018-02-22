import { Component, OnInit, Input, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params, Router, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from './../../../../data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  animations: [

    // Slide In for Artist Picture
    trigger('slide-in', [
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

    // Fade in Left for amount of albums artist has
    trigger('fade-in-left', [
      state('out', style({
        transform: 'translateX(100px)',
        opacity: '0'
      })),
      state('in', style({
        transform: 'translateX(0px)',
        opacity: '1'
      })),
      transition('out <=> in',
        animate('500ms 1000ms ease-out'))
    ]),

    // Artist name fade in
    trigger('fade-in', [
      state('out', style({
        opacity: '0'
      })),
      state('in', style({
        opacity: '1'
      })),
      transition('out <=> in',
        animate('500ms 500ms ease-out'))
    ]),

    // Fade Up slide for Artist Info
    trigger('fade-up', [
      state('out', style({
        transform: 'translateY(100px)',
        opacity: '0'
      })),
      state('in', style({
        transform: 'translateY(0px)',
        opacity: '1'
      })),
      transition('out <=> in',
        animate('500ms 1000ms ease-out'))
    ]),
  ]
})
export class InfoComponent implements OnInit {

  // Animation States
  state: string = 'out';

  artistData = this.dataService.data.artists;
  artistInfo: any = null;
  artistName: any = null;
  albumsToDisplay: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private  cdRef:ChangeDetectorRef

  ){  }

  // Returns an Array of Albums(Objects).
  // Reduce method gets each album of each artist
  // ****** Reduce method is awesome, need to master it. ******
  getAlbums = this.artistData.reduce(
    (acc: any, next: any) => {
      next.albums.forEach(album => {
        acc.push(album);
      });
    return acc;
  }, []);

  // Returns an Array of each artistName in the JSON
  getArtistInfo(artistName: any) {
    return this.artistData.filter( artist => artist.artistName === artistName );
  }

  // Returns an Array of Albums(Objects) that have the same 'artistName'
  getAlbumsByArtist(artistName: any) {
    return this.getAlbums.filter (album => album.artistName === artistName);
  }

  // Initializes variables when component is being Initialized (OnInit)
  // After Constructor,
  // After first ngOnChanges,
  // After Input Properties are Initialized
  ngOnInit(){
     this.artistName = this.route.snapshot.params['artistName'];
     this.artistInfo = this.getArtistInfo(this.artistName);
     this.albumsToDisplay = this.getAlbumsByArtist(this.artistName);
     console.log(this.artistInfo)
  }

  // Initializes AFTER the view is rendered
  // Changes *state* from 'in' to 'out' for these animations:
    // fade-in
    // fade up
    // fade-in-left
    // slide-in

  ngAfterViewInit() {
     this.state = (this.state === 'in' ? 'out' : 'in')
     this.cdRef.detectChanges(); // ***** STudy Change Detection a little more
  }


}
