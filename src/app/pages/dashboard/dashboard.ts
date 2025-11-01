import { Component, DOCUMENT, inject } from '@angular/core';
import { NotificationsWidget } from './components/notificationswidget';
import { StatsWidget } from './components/statswidget';
import { RecentSalesWidget } from './components/recentsaleswidget';
import { BestSellingWidget } from './components/bestsellingwidget';
import { RevenueStreamWidget } from './components/revenuestreamwidget';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNG } from 'primeng/config';

@Component({
    selector: 'app-dashboard',
    imports: [StatsWidget, RecentSalesWidget, BestSellingWidget, RevenueStreamWidget, NotificationsWidget],
    template: `
        <div class="grid grid-cols-12 gap-8">
        <div class="col-span-12 xl:col-span-6">
        <div class="flex gap-2 items-center">
                <button type="button" class="layout-topbar-action" (click)="switchLanguage('fa')">FA</button>
                <button type="button" class="layout-topbar-action" (click)="switchLanguage('en')">EN</button>
            </div>
            </div>

            <app-stats-widget class="contents" />
            <div class="col-span-12 xl:col-span-6">
                <app-recent-sales-widget />
                <app-best-selling-widget />
            </div>
            <div class="col-span-12 xl:col-span-6">
                <app-revenue-stream-widget />
                <app-notifications-widget />
            </div>
        </div>
    `
})
export class Dashboard {
    private translate = inject(TranslateService);
    private primeng = inject(PrimeNG);

    currentLang = '';
    private readonly document = inject(DOCUMENT);

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


    switchLanguage(lang: 'fa' | 'en') {
        this.setLanguage(lang);
    }
}
