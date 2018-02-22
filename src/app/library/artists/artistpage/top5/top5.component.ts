import { Component, OnInit, Input, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params, Router, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from './../../../../data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate, keyframes} from '@angular/animations';


@Component({
  selector: 'top5',
  templateUrl: './top5.component.html',
  styleUrls: ['./top5.component.css']
})
export class Top5Component implements OnInit {

  artistName: any = null;
  artistInfo: any = null;
  albumsToDisplay: any = null;
  artistGenre: any = null;
  artistData = this.dataService.data.artists;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private  cdRef:ChangeDetectorRef

  ){  }

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

  ngOnInit() {
    this.artistName = this.route.snapshot.params['artistName'];
    this.artistInfo = this.getArtistInfo(this.artistName);
    console.log(this.route);
  }

}
