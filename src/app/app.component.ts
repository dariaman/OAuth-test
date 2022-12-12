import { Component } from '@angular/core';
import { CredentialResponse } from 'google-one-tap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OAuth-test';

  LoginModel: any = {}

  handleCredentialGoogleResponse(response: CredentialResponse) {
    console.log(response);
  }

  
}
