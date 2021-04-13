import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { ViewFilesComponent } from './view-files/view-files.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';
import { HealthCheckComponent } from './health-check/health-check.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';

const routes: Route[] = [
  { path: 'view-files', component: ViewFilesComponent },
  { path: 'objective-one', component: ViewFilesComponent },
  { path: 'health-check', component: HealthCheckComponent },
  { path: 'objective-two', component: HealthCheckComponent },
];

@NgModule({
  declarations: [AppComponent, ViewFilesComponent, HealthCheckComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularMaterialModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
