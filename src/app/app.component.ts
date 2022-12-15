import { FacebookLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OAuth-test';

  LoginModel: any = {}

  constructor(private authService: SocialAuthService) { }

  async signInWithFB() {
    var asdf = await this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    // console.log(asdf);
    console.log(asdf.response);
  }
  
}
