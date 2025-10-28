import { Component, DOCUMENT, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNG } from 'primeng/config';  
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule],
    template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit{
    private translate = inject(TranslateService);
    private primeng = inject(PrimeNG);

    currentLang = '';
    private readonly document = inject(DOCUMENT);

    
    ngOnInit(): void {
        this.translate.addLangs(['fa', 'en']);
        this.translate.setFallbackLang('en');
        this.setLanguage('en');

        this.translate.get('primeng').subscribe(res => this.primeng.setTranslation(res));
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
          this.applyLanguageAttributes(language);
        });
    
        this.applyLanguageAttributes(language);
      }
    }
