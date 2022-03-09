import { Injectable } from "@angular/core";
import { Iuser } from "./user";
import{HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable, throwError } from "rxjs";
import{catchError, tap } from "rxjs/operators";
@Injectable()

export class userService{
private usersUrl ='https://jsonplaceholder.typicode.com/users';
constructor(private http : HttpClient ){ }
getUsers() : Observable  <Iuser[]>
{ 
    return this.http.get<Iuser[]>(this.usersUrl).pipe(
        tap(data => console.log ('All', JSON.stringify(data))),
        catchError(this.handleError)
    );
        
}
private handleError(err: HttpErrorResponse): Observable<never> {
    
    
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
   
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }





}