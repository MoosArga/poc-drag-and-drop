import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CrsWrapper } from '../model/crs-wrapper';

@Injectable({
  providedIn: 'root'
})
export class CrsService {

  constructor(private http: HttpClient) { }

  findAllCrs(): Observable<CrsWrapper> {
    return this.http.get<CrsWrapper>('assets/data/crs.json');
  }
}
