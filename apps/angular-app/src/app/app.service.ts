import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private readonly apiUrl = 'api';

  constructor(private http: HttpClient) {}

  getMessage() {
    const url = `${this.apiUrl}/message`;
    return this.http.get(url);
  }

  getUserData(userId: number) {
    const url = `${this.apiUrl}/users/${userId}`;
    return this.http.get(url);
  }

  isCorruptedByUser(userId: number) {
    const url = `${this.apiUrl}/health-check/is-corrupted/${userId}`;
    return this.http.get(url);
  }

  isCorruptedByFilesystem(filesystem: any) {
    const url = `${this.apiUrl}/health-check/is-corrupted`;
    return this.http.post(url, filesystem);
  }

  getCorrupted(userId: number) {
    const url = `${this.apiUrl}/health-check/corrupted/${userId}`;
    return this.http.get(url);
  }

  getUncorrupted(userId: number, strict: boolean = true) {
    const url = `${this.apiUrl}/health-check/uncorrupted/${userId}?strict=${strict}`;
    return this.http.get(url);
  }

  fixCorrupted(userId: number, items: any[]) {
    const url = `${this.apiUrl}/health-check/fix-corrupted`;
    return this.http.post(url, { items });
  }
}
