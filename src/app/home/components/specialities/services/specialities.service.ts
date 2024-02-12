import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SpecialitiesService {
  private url = 'data.json';
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<any[]>(this.url).pipe(
      catchError((e) => {
        console.log('Error', e);
        return throwError(e);
      })
    );
  }
}
