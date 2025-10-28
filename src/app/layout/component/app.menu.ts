import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule, TranslateModule],
    template: `<ul class="layout-menu">
            @for (item of model; track $index) {
                @if (!item.separator) {
                    <li app-menuitem [item]="item" [index]="$index" [root]="true"></li>
                } @else {
                    <li class="menu-separator"></li>
                }
            }
    </ul> `
})

export class AppMenu {
    model: MenuItem[] = [];
    private translate = inject(TranslateService);

    ngOnInit() {
        this.model = [
            {
                label: 'navigation.home',
                items: [{ label: 'navigation.dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }]
            },
            {
                label: 'navigation.uiComponents',
                items: [
                    { label: 'navigation.formLayout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    { label: 'navigation.input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                    { label: 'navigation.button', icon: 'pi pi-fw pi-mobile', class: 'rotated-icon', routerLink: ['/uikit/button'] },
                    { label: 'navigation.table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
                    { label: 'navigation.list', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
                    { label: 'navigation.tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
                    { label: 'navigation.panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
                    { label: 'navigation.overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
                    { label: 'navigation.media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
                    { label: 'navigation.menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'] },
                    { label: 'navigation.message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
                    { label: 'navigation.file', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
                    { label: 'navigation.chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
                    { label: 'navigation.timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/uikit/timeline'] },
                    { label: 'navigation.misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
                ]
            },
            {
                label: 'navigation.pages',
                icon: 'pi pi-fw pi-briefcase',
                routerLink: ['/pages'],
                items: [
                    {
                        label: 'navigation.landing',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/landing']
                    },
                    {
                        label: 'navigation.auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'auth.login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'navigation.error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'navigation.accessDenied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },
                    {
                        label: 'navigation.crud',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/crud']
                    },
                    {
                        label: 'navigation.notFound',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/pages/notfound']
                    },
                    {
                        label: 'navigation.empty',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/pages/empty']
                    }
                ]
            },
            {
                label: 'navigation.hierarchy',
                items: [
                    {
                        label: 'navigation.submenu1',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'navigation.submenu1_1',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'navigation.submenu1_1_1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'navigation.submenu1_1_2', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'navigation.submenu1_1_3', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                            {
                                label: 'navigation.submenu1_2',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [{ label: 'navigation.submenu1_2_1', icon: 'pi pi-fw pi-bookmark' }]
                            }
                        ]
                    },
                    {
                        label: 'navigation.submenu2',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'navigation.submenu2_1',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'navigation.submenu2_1_1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'navigation.submenu2_1_2', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                            {
                                label: 'navigation.submenu2_2',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [{ label: 'navigation.submenu2_2_1', icon: 'pi pi-fw pi-bookmark' }]
                            }
                        ]
                    }
                ]
            },
            {
                label: 'navigation.getStarted',
                items: [
                    {
                        label: 'navigation.documentation',
                        icon: 'pi pi-fw pi-book',
                        routerLink: ['/documentation']
                    },
                    {
                        label: 'navigation.viewSource',
                        icon: 'pi pi-fw pi-github',
                        url: 'https://github.com/primefaces/sakai-ng',
                        target: '_blank'
                    }
                ]
            }
        ];
    }
}
