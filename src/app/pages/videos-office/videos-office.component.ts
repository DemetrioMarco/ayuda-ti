import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExcelService } from '../../servicios/excel.service';
import { PlannerService } from '../../servicios/planner.service';


@Component({
  selector: 'app-videos-office',
  templateUrl: './videos-office.component.html',
  styleUrls: ['./videos-office.component.css']
})
export class VideosOfficeComponent {

  recursos = [
    {
      name: '',
      src: ''
    }
  ]

  videoItems = [
    {
      name:'',
      src:'',
      type: '',
      recursos: this.recursos
    }
  ];

  secciones = [
    {
      name: '',
      videos: this.videoItems,
      time: ''
    }
  ];


  idVideo: number = 0;
  service: any = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _excelServicio: ExcelService,
    private _plannerServicio: PlannerService) { 
    
    this.activatedRoute.params.subscribe(params => {
      this.idVideo = params['id'];
    });

    this.cargarVideos();
    this.cargarSeccion();
  }


  cargarSeccion() {

    if (this.idVideo == 1) {
      this.secciones = this._excelServicio.getSecciones();
    } else if (this.idVideo == 2) {
      this.secciones = this._plannerServicio.getSecciones();
    }

  }

  cargarVideos() {
    
    if (this.idVideo == 1) {
      this.videoItems = this._excelServicio.iniciarVideos(1);
      
    } else if (this.idVideo == 2) {
      this.videoItems = this._plannerServicio.iniciarVideos(1);
    }

     this.startPlaylistVdo(this.videoItems[0],0);
  }


  activeIndex = 0;
  currentVideo = this.videoItems[this.activeIndex];
  data: any;


  videoPlayerInit(data: any) {
    this.data = data;
    this.data.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.initVdo.bind(this));
    this.data.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }

  nextVideo() {
    this.activeIndex++;

    if (this.activeIndex === this.videoItems.length) {
      this.activeIndex = 0;
    }

    this.currentVideo = this.videoItems[this.activeIndex];
  }

  initVdo() {
    this.data.play();
 //   this.data.pause();
  }

  startPlaylistVdo(item: any, index: number) {
    this.activeIndex = index;
    this.currentVideo = item;
  }

}
