import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SapService } from '../../servicios/sap.service';

@Component({
  selector: 'app-videos-sap',
  templateUrl: './videos-sap.component.html',
  styleUrls: ['./videos-sap.component.css']
})
export class VideosSapComponent {
  
  videoItems = [
    {
      name:'',
      src:'',
      type:''
    }
  ];

  secciones = [
    {
      id: 0,
      name: '',
      videos: this.videoItems
    }
  ]
  
  idVideo: number = 0;

  activeIndex = 0;
  currentVideo = this.videoItems[this.activeIndex];
  data: any;

  constructor(private activatedRouter: ActivatedRoute, private _sapServicio: SapService) {

     this.activatedRouter.params.subscribe( params => {
      this.idVideo = params['id'];
     });
     
     this.cargarVideos(this.idVideo);
     this.cargarSeccion();
  }
  
  cargarSeccion() {
    this.secciones = this._sapServicio.getSecciones();
  }


  cargarVideos(modulo: number) {
    console.log('Cargar video');
    this.videoItems = this._sapServicio.iniciarVideos(modulo);
   this.startPlaylistVdo(this.videoItems[0], 0);
  }

  videoPlayerInit(data: any) {
    this.data = data;
    this.data.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.initVdo.bind(this));
    this.data.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
    console.log(data.medias.singleVideo);
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
  }

  time: number = 0;

  startPlaylistVdo(item: any, index: number) {
    this.activeIndex = index;
    this.currentVideo = item;
  }

}
