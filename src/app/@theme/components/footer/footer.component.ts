import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      @Copyright  <b><a href="https://github.com/khalifa005/khalifa-angular-template" target="_blank">ACIG</a></b> 2023
    </span>
    <div class="socials">
      <a href="https://github.com/khalifa005" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.facebook.com/medoo.kh.9/" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.linkedin.com/in/mahmoud-khalifa-643936138/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
