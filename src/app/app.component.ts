import { Component, DOCUMENT, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNG } from 'primeng/config';
import { authCodeFlowConfig } from './auth.config';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  private translate = inject(TranslateService);
  private primeng = inject(PrimeNG);
  private authService = inject(AuthService);

  currentLang = '';
  private readonly document = inject(DOCUMENT);

  ngOnInit(): void {
    this.authService.configure();
    this.translate.addLangs(['fa', 'en']);
    this.translate.setFallbackLang('en');
    this.setLanguage('fa');
  }

  private applyLanguageAttributes(language: string): void {
    const direction = language === 'fa' ? 'rtl' : 'ltr';
    const docElement = this.document.documentElement;

    docElement.setAttribute('lang', language);
    docElement.setAttribute('dir', direction);
    this.document.body.setAttribute('dir', direction);
  }

  setLanguage(language: string): void {
    if (this.currentLang === language) {
      return;
    }

    this.currentLang = language;

    this.translate.use(language).subscribe(() => {
      this.translate.get('primeng').subscribe(res => this.primeng.setTranslation(res));
      this.applyLanguageAttributes(language);
    });

    this.applyLanguageAttributes(language);
  }
}
