import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType,
} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  error = new Subject<string>();
  private role = 'genericUser';
  constructor(private http: HttpClient) {}

  getRole() {
    return this.role;
  }

  setRole(ruolo: string) {
    this.role = ruolo;
  }

  loginUser(email: string, password: string, url: string) {
    const postData: User = { email: email, password: password };
    return this.http.post<{ name: string }>(url, postData).pipe(
      map((response) => {
        return response;
      })
    );
  }

  /*   fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.http
      .get<{ [key: string]: User }>(
        'https://angular-httprequest-bfb17-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        {
          headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
          params: searchParams,
          responseType: 'json',
        }
      )
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError((errorRes) => {
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http
      .delete(
        'https://angular-httprequest-bfb17-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        {
          observe: 'events',
          responseType: 'text',
        }
      )
      .pipe(
        tap((event) => {
          console.log(event);
          if (event.type === HttpEventType.Sent) {
            // ...
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  } */
}
