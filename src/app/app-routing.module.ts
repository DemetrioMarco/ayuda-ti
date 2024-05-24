import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstruccionComponent } from './pages/construccion/construccion.component';
import { HomeComponent } from './pages/home/home.component';
import { NoiComponent } from './pages/noi/noi.component';
import { OfficeComponent } from './pages/office/office.component';
import { SapComponent } from './pages/sap/sap.component';
import { SharepointComponent } from './pages/sharepoint/sharepoint.component';
import { VideosOfficeComponent } from './pages/videos-office/videos-office.component';
import { VideosSapComponent } from './pages/videos-sap/videos-sap.component';

const routes: Routes = [
  { path: ' ', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'sap', component: SapComponent},
  { path: 'video/:id', component: VideosSapComponent },
  { path: 'videoOffice/:id', component: VideosOfficeComponent },
  { path: 'office', component: OfficeComponent},
  { path: 'noi', component: NoiComponent},
  { path: 'sharepoint', component: SharepointComponent}, 
  { path: 'construccion', component: ConstruccionComponent}, 
  { path: '**', pathMatch:'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
