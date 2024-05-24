import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sap',
  templateUrl: './sap.component.html',
  styleUrls: [ './sap.component.css']
})
export class SapComponent {
  
  constructor( private router:Router) { }
  
  // video de recorrido gestion en youtube
  id = 'xSrstKkVhE0';
  
  private player: any;

  videoStateChange(e: any) {
    this.player = e;
  }

  savePlayer(player: any) {
    console.log('savePlayer', player);
    this.player = player;
  }
  
  pauseVideo() {
    
    this.player.target.pauseVideo();

  }
  
  restart() {
    let video: any = document.getElementById("videoGestion");
    video.currentTime = 0;
    video.pause();
    console.log('restart');
  }

  // Envio a video-sap 
  redireccion( idx:number){
    this.router.navigate(['/video',idx]);
  }
}
