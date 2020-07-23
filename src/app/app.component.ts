import { Component, Inject, LOCALE_ID, Renderer2 } from '@angular/core';
import { ConfigName, ConfigService } from '../@vex/services/config.service';
import { MatIconRegistry } from '@angular/material/icon';
import { Settings } from 'luxon';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { NavigationService } from '../@vex/services/navigation.service';
import icLayers from '@iconify/icons-ic/twotone-layers';
import icAssigment from '@iconify/icons-ic/twotone-assignment';
import icContactSupport from '@iconify/icons-ic/twotone-contact-support';
import icDateRange from '@iconify/icons-ic/twotone-date-range';
import icContacts from '@iconify/icons-ic/twotone-contacts';
import icAssessment from '@iconify/icons-ic/twotone-assessment';
import icLock from '@iconify/icons-ic/twotone-lock';
import icWatchLater from '@iconify/icons-ic/twotone-watch-later';
import icError from '@iconify/icons-ic/twotone-error';
import icAttachMoney from '@iconify/icons-ic/twotone-attach-money';
import icPersonOutline from '@iconify/icons-ic/twotone-person-outline';
import icReceipt from '@iconify/icons-ic/twotone-receipt';
import icHelp from '@iconify/icons-ic/twotone-help';
import icBook from '@iconify/icons-ic/twotone-book';
import icBubbleChart from '@iconify/icons-ic/twotone-bubble-chart';
import icFormatColorText from '@iconify/icons-ic/twotone-format-color-text';
import icStar from '@iconify/icons-ic/twotone-star';
import icViewCompact from '@iconify/icons-ic/twotone-view-compact';
import icPictureInPicture from '@iconify/icons-ic/twotone-picture-in-picture';
import icSettings from '@iconify/icons-ic/twotone-settings';
import { LayoutService } from '../@vex/services/layout.service';
import icUpdate from '@iconify/icons-ic/twotone-update';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { SplashScreenService } from '../@vex/services/splash-screen.service';
import { Style, StyleService } from '../@vex/services/style.service';
import theme from '../@vex/utils/tailwindcss';
import icChromeReaderMode from '@iconify/icons-ic/twotone-chrome-reader-mode';

@Component({
  selector: 'vex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vex';

  constructor(private configService: ConfigService,
              private styleService: StyleService,
              private iconRegistry: MatIconRegistry,
              private renderer: Renderer2,
              private platform: Platform,
              @Inject(DOCUMENT) private document: Document,
              @Inject(LOCALE_ID) private localeId: string,
              private layoutService: LayoutService,
              private route: ActivatedRoute,
              private navigationService: NavigationService,
              private splashScreenService: SplashScreenService) {
    this.iconRegistry.setDefaultFontSetClass('iconify');
    Settings.defaultLocale = this.localeId;

    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, 'is-blink');
    }

    this.route.queryParamMap.pipe(
      filter(queryParamMap => queryParamMap.has('rtl') && coerceBooleanProperty(queryParamMap.get('rtl')))
    ).subscribe(queryParamMap => {
      this.document.body.dir = 'rtl';
      this.configService.updateConfig({
        rtl: true
      });
    });

    this.route.queryParamMap.pipe(
      filter(queryParamMap => queryParamMap.has('layout'))
    ).subscribe(queryParamMap => this.configService.setConfig(queryParamMap.get('layout') as ConfigName));

    this.route.queryParamMap.pipe(
      filter(queryParamMap => queryParamMap.has('style'))
    ).subscribe(queryParamMap => this.styleService.setStyle(queryParamMap.get('style') as Style));

    this.navigationService.items = [
      {
        type: 'link',
        label: 'Inicio',
        route: '/dashboards/analytics',
        icon: icLayers
      },       
      {
        type: 'link',
        label: "Clientes",
        route: "/apps/clientes",
        icon: icAssigment
      },
      {
        type: 'link',
        label: "Contratos",
        route: "/apps/contratos",
        icon: icAssigment
      },
      
      {
        type: 'subheading',
        label: 'Funcionalidad',
        children: [
          {
            type: 'link',
            label: 'Calendario',
            route: '/apps/calendar',
            icon: icDateRange,
            badge: {
              value: '12',
              background: theme.colors['deep-purple']['500'],
              color: theme.textColor['deep-purple-contrast']['500']
            },
          }
        ]
      },
      {
        type: 'subheading',
        label: 'Apps',
        children: [
          {
            type: 'link',
            label: 'Calendar',
            route: '/apps/calendar',
            icon: icDateRange,
            badge: {
              value: '12',
              background: theme.colors['deep-purple']['500'],
              color: theme.textColor['deep-purple-contrast']['500']
            },
          },       
          {
            type: 'link',
            label: 'Contacts',
            icon: icContacts,
            route: '/apps/contacts/table',            
          }
        ]
      },
      {
        type: 'subheading',
        label: 'Pages',
        children: [
          {
            type: 'dropdown',
            label: 'Authentication',
            icon: icLock,
            children: [
              {
                type: 'link',
                label: 'Login',
                route: '/login'
              },
              {
                type: 'link',
                label: 'Register',
                route: '/register'
              },
              {
                type: 'link',
                label: 'Forgot Password',
                route: '/forgot-password'
              }
            ]
          },
          {
            type: 'link',
            label: 'Coming Soon',
            icon: icWatchLater,
            route: '/coming-soon'
          },        
          {
            type: 'link',
            label: 'Pricing',
            icon: icAttachMoney,
            route: '/pages/pricing'
          },
          {
            type: 'link',
            label: 'Profile',
            icon: icPersonOutline,
            route: '/pages/profile'
          },
          {
            type: 'link',
            label: 'Invoice',
            icon: icReceipt,
            route: '/pages/invoice'
          }         
        ]
      },
      {
        type: 'subheading',
        label: 'UI Elements',
        children: [
          {
            type: 'dropdown',
            label: 'Components',
            icon: icBubbleChart,
            children: [
              {
                type: 'link',
                label: 'Overview',
                route: '/ui/components/overview'
              },
              {
                type: 'link',
                label: 'Autocomplete',
                route: '/ui/components/autocomplete'
              },
              {
                type: 'link',
                label: 'Buttons',
                route: '/ui/components/buttons'
              },
              {
                type: 'link',
                label: 'Button Group',
                route: '/ui/components/button-group'
              },
              {
                type: 'link',
                label: 'Cards',
                route: '/ui/components/cards'
              },
              {
                type: 'link',
                label: 'Checkbox',
                route: '/ui/components/checkbox'
              },
              {
                type: 'link',
                label: 'Dialogs',
                route: '/ui/components/dialogs'
              },
              {
                type: 'link',
                label: 'Grid List',
                route: '/ui/components/grid-list'
              },
              {
                type: 'link',
                label: 'Input',
                route: '/ui/components/input'
              },
              {
                type: 'link',
                label: 'Lists',
                route: '/ui/components/lists'
              },
              {
                type: 'link',
                label: 'Menu',
                route: '/ui/components/menu'
              },
              {
                type: 'link',
                label: 'Progress',
                route: '/ui/components/progress'
              },
              {
                type: 'link',
                label: 'Progress Spinner',
                route: '/ui/components/progress-spinner'
              },
              {
                type: 'link',
                label: 'Radio',
                route: '/ui/components/radio'
              },
              {
                type: 'link',
                label: 'Slide Toggle',
                route: '/ui/components/slide-toggle'
              },
              {
                type: 'link',
                label: 'Slider',
                route: '/ui/components/slider'
              },
              {
                type: 'link',
                label: 'Snack Bar',
                route: '/ui/components/snack-bar'
              },
              {
                type: 'link',
                label: 'Tooltip',
                route: '/ui/components/tooltip'
              },
            ]
          },
          {
            type: 'dropdown',
            label: 'Forms',
            icon: icFormatColorText,
            children: [
              {
                type: 'link',
                label: 'Form Elements',
                route: '/ui/forms/form-elements'
              },
              {
                type: 'link',
                label: 'Form Wizard',
                route: '/ui/forms/form-wizard'
              }
            ]
          },
          {
            type: 'dropdown',
            label: 'Icons',
            icon: icStar,
            children: [
              {
                type: 'link',
                label: 'Material Icons',
                route: '/ui/icons/ic'
              },
              {
                type: 'link',
                label: 'FontAwesome Icons',
                route: '/ui/icons/fa'
              }
            ]
          },
          {
            type: 'dropdown',
            label: 'Page Layouts',
            icon: icViewCompact,
            children: [
              {
                type: 'dropdown',
                label: 'Card',
                children: [
                  {
                    type: 'link',
                    label: 'Default',
                    route: '/ui/page-layouts/card',
                    routerLinkActive: { exact: true }
                  },
                  {
                    type: 'link',
                    label: 'Tabbed',
                    route: '/ui/page-layouts/card/tabbed',
                  },
                  {
                    type: 'link',
                    label: 'Large Header',
                    route: '/ui/page-layouts/card/large-header',
                    routerLinkActive: { exact: true }
                  },
                  {
                    type: 'link',
                    label: 'Tabbed & Large Header',
                    route: '/ui/page-layouts/card/large-header/tabbed'
                  }
                ]
              },
              {
                type: 'dropdown',
                label: 'Simple',
                children: [
                  {
                    type: 'link',
                    label: 'Default',
                    route: '/ui/page-layouts/simple',
                    routerLinkActive: { exact: true }
                  },
                  {
                    type: 'link',
                    label: 'Tabbed',
                    route: '/ui/page-layouts/simple/tabbed',
                  },
                  {
                    type: 'link',
                    label: 'Large Header',
                    route: '/ui/page-layouts/simple/large-header',
                    routerLinkActive: { exact: true }
                  },
                  {
                    type: 'link',
                    label: 'Tabbed & Large Header',
                    route: '/ui/page-layouts/simple/large-header/tabbed'
                  }
                ]
              },
              {
                type: 'link',
                label: 'Blank',
                icon: icPictureInPicture,
                route: '/ui/page-layouts/blank'
              }
            ]
          }
        ]
      }
    ];
  }
}
