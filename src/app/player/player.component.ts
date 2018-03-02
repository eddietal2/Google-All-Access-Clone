import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { DataService } from './../data.service';
import { SharedService } from './../shared.service';


@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],

})
export class PlayerComponent implements OnInit {

  paused: boolean = true;
  songInfo: any = "lol";
  songFile: any = "";
  audio = new Audio();


  constructor(
    private dataService: DataService,
    private sharedService: SharedService
  ) {
     sharedService.changeEmitted$.subscribe(
      song => {
          this.songInfo = song;
          this.songFile = song.file;
          this.playSong();
          console.log(this.songFile)
      });

    }

  playSong(){
    this.audio.src = this.songFile;
    this.audio.play();
    this.paused = false;
  }

  pauseSong(){
    this.audio.pause();
    this.paused = true;
  }

  ngOnInit() {

  }

}
