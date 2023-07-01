import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, delay, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailValidator implements AsyncValidator {

  // constructor( private http: HttpClient) {}
  constructor() {}

  validate(
    control: AbstractControl<any, any>
  ): Observable<ValidationErrors | null> {
    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>( (subscriber) => {

      console.log({ email });

      if ( email === 'fernando@google.com') {
        subscriber.next({ emailTaken: true })
        subscriber.complete()
        // return
      }

      subscriber.next( null )
      subscriber.complete()

    }).pipe( delay( 5000 ))

    return httpCallObservable
  }

  // validate(
  //   control: AbstractControl<any, any>
  // ): Observable<ValidationErrors | null> {
  //   const email = control.value;
  //   console.log({ email });
  //   return of({
  //     emailTaken: true,
  //   }).pipe(delay(5000));
  // }

  // validate(
  //   control: AbstractControl<any, any>
  // ): Observable<ValidationErrors | null> {
  //   const email = control.value;
  //   console.log({ email });

  //   return this.http.get<any[]>(`http://localhost:3000/users?q=${email}`).pipe(
  //     map((resp) => {
  //       return resp.length === 0 ? null : { emailTaken: true };
  //     })
  //   );
  // }
}
