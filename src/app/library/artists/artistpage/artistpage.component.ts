import { Component, OnInit, Input, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params, Router, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from './../../../data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate, keyframes} from '@angular/animations';



@Component({
  selector: 'artistpage',
  templateUrl: './artistpage.component.html',
  styleUrls: ['./artistpage.component.css']
})
export class ArtistPageComponent implements OnInit{

  artistName: any = null;

  constructor(
    private route: ActivatedRoute,

  ){  }

  ngOnInit(){
     this.artistName = this.route.snapshot.params['artistName'];

  }

}

