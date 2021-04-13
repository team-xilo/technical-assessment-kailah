import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'technical-interview-health-check',
  templateUrl: './health-check.component.html',
  styleUrls: ['./health-check.component.scss'],
})
export class HealthCheckComponent {
  isCorruptedUserId: number;
  corruptedUserId: number;
  uncorruptedUserId: number;
  isCorruptedFilesystem: string;
  fixCorruptedUserId: number;
  fixCorruptedBody: string;

  isCorruptedUserIdResponse: any;
  isCorruptedFilesystemResponse: any;
  corruptedResponse: any;
  uncorruptedResponse: any;
  fixCorruptedResponse: any;

  uncorruptedStrict = true;

  constructor(private appService: AppService) {}

  getIsCorrupted() {
    this.appService.isCorruptedByUser(this.isCorruptedUserId).subscribe({
      next: (res) => (this.isCorruptedUserIdResponse = res),
      error: (err) => (this.isCorruptedUserIdResponse = err),
    });
  }

  getCorrupted() {
    this.appService.getCorrupted(this.corruptedUserId).subscribe({
      next: (res) => (this.corruptedResponse = res),
      error: (err) => (this.corruptedResponse = err),
    });
  }

  getUncorrupted() {
    this.appService.getUncorrupted(this.uncorruptedUserId, this.uncorruptedStrict).subscribe({
      next: (res) => (this.uncorruptedResponse = res),
      error: (err) => (this.uncorruptedResponse = err),
    });
  }

  postIsCorrupted() {
    const filesystem = JSON.parse(this.isCorruptedFilesystem || '{}');
    this.appService.isCorruptedByFilesystem(filesystem).subscribe({
      next: (res) => (this.isCorruptedFilesystemResponse = res),
      error: (err) => (this.isCorruptedFilesystemResponse = err),
    });
  }

  fixCorrupted() {
    const body = JSON.parse(this.fixCorruptedBody || '[]');
    this.appService.fixCorrupted(this.fixCorruptedUserId, body).subscribe({
      next: (res) => (this.fixCorruptedResponse = res),
      error: (err) => (this.fixCorruptedResponse = err),
    });
  }
}
