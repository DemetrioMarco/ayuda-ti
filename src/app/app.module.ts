import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConstruccionComponent } from './pages/construccion/construccion.component';
import { HomeComponent } from './pages/home/home.component';
import { NoiComponent } from './pages/noi/noi.component';
import { OfficeComponent } from './pages/office/office.component';
import { SapComponent } from './pages/sap/sap.component';
import { SharepointComponent } from './pages/sharepoint/sharepoint.component';
import { VideosOfficeComponent } from './pages/videos-office/videos-office.component';
import { VideosSapComponent } from './pages/videos-sap/videos-sap.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

import { YouTubePlayerModule } from '@angular/youtube-player';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';

@NgModule({
  declarations: [
    AppComponent,
    ConstruccionComponent,
    HomeComponent,
    NoiComponent,
    OfficeComponent,
    SapComponent,
    SharepointComponent,
    VideosOfficeComponent,
    VideosSapComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
