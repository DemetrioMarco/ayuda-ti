import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  restart() {
    let video: any = document.getElementById("videoIntro");
    video.currentTime = 0;
    video.pause();
  }

  redireccion(idx: number) {
    this.router.navigate(['/videoOffice', idx]);
  }

}
