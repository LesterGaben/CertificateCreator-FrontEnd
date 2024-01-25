import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { AppFooterComponent } from '../app-fixed-footer/app-footer.component';



@Component({
  selector: 'verify-certificate',
  standalone: true,
  imports: [ 
             CommonModule,
             FormsModule,
             HttpClientModule,
             AppFooterComponent
           ],
  templateUrl: './verify-certificate.component.html',
  styleUrl: './verify-certificate.component.scss'
})
export class VerifyCertificateComponent {
  
  inputIdFieldId: string = '';
  inputIdFiledError: boolean = false;
  IdIsChecked: boolean = false;
  IdIsVerified: boolean = false;
  afterCheckIdText: string = 'Congratulations! Your certificate has been verified';

  constructor(private http: HttpClient, private router: Router) {}

  checkCertificateId() {
    this.checkIfInputFieldCorrect();
    if(this.inputIdFiledError) {
      return;
    }

    this.executeCheckIdRequest(this.inputIdFieldId)
      .subscribe(result => {
        if (result) {
          this.afterCheckIdText = 'Congratulations! Your certificate has been verified';
          this.IdIsChecked = true;
          this.IdIsVerified = true;
        } else {
          this.afterCheckIdText = 'We\'re sorry, but your code is not valid';
          this.IdIsChecked = true;
          this.IdIsVerified = false;
        }
      });
  }

  executeCheckIdRequest(certificateId: string): Observable<boolean> {
    const url = `https://localhost:7110/certificates/check-id/${certificateId}`;
    return this.http.get<boolean>(url).pipe(
      catchError(this.handleError)
    );
  }

  redirectToDownloadCertificate() {
    this.router.navigateByUrl(`/certificates/${this.inputIdFieldId}`);
  }

  private handleError(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {

      console.error('Виникла помилка:', error.error.message);
    } else {

      console.error(`Сервер повернув код ${error.status}, ` +
                    `тіло помилки: ${error.error}`);
    }

    return throwError('Щось пішло не так; спробуйте пізніше.');
  }

  checkIfInputFieldCorrect() {
    console.log(this.inputIdFieldId.length);
    const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    if(this.inputIdFieldId.length == 36 && regex.test(this.inputIdFieldId)) {
      this.inputIdFiledError = false;
    }
    else {
      this.inputIdFiledError = true;
    }
  }
}
