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
  songTime: any = "";
  songDuration: any = null;
  audio = new Audio();


  constructor(
    private dataService: DataService,
    private sharedService: SharedService
  ) {
     sharedService.changeEmitted$.subscribe(
      song => {
          this.songInfo = song;
          this.songFile = song.file;
          this.songDuration = this.convert(this.songInfo.length);
          this.playSong();
      });

    }

  playSong(){
    this.audio.src = this.songFile;
    this.audio.play();
    console.log(this.songInfo.length)
    this.paused = false;
    this.audio.addEventListener("timeupdate", (currentTime)=>{
      this.songTime = this.audio.currentTime;
    });
  }

  pauseSong(){
    this.audio.pause();
    this.paused = true;
  }

  // Change string value of 'this.songInfo.length' to a number
  convert(input) {
    var parts = input.split(':'),
    minutes = +parts[0],
    seconds = +parts[1];
    return (minutes * 60 + seconds).toFixed(3);
}


  ngOnInit() {



  }

}
