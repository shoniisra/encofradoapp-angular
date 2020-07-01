import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { DeepPartial } from '../interfaces/deep-partial.type';
import { mergeDeep } from '../utils/merge-deep';
import { LayoutService } from './layout.service';

export interface Config {
  id: ConfigName;
  rtl?: boolean;
  name: string;
  imgSrc: string;
  layout: 'vertical' | 'horizontal';
  boxed: boolean;
  sidenav: {
    state: 'expanded' | 'collapsed';
  };
  toolbar: {
    fixed: boolean;
  };
  navbar: {
    position: 'below-toolbar' | 'in-toolbar';
  };
  footer: {
    visible: boolean;
    fixed: boolean;
  };
}

export enum ConfigName {
  apollo = 'vex-layout-apollo',
  zeus = 'vex-layout-zeus',
  hermes = 'vex-layout-hermes',
  poseidon = 'vex-layout-poseidon',
  ares = 'vex-layout-ares',
  ikaros = 'vex-layout-ikaros',
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  defaultConfig = ConfigName.apollo;

  configs: Config[] = [
    {
      id: ConfigName.apollo,
      name: 'Apollo',
      imgSrc: '//vex.visurel.com/landing/assets/img/layouts/apollo.png',
      layout: 'horizontal',
      boxed: false,
      sidenav: {
        state: 'expanded'
      },
      toolbar: {
        fixed: true
      },
      navbar: {
        position: 'below-toolbar'
      },
      footer: {
        visible: true,
        fixed: true
      }
    },
    {
      id: ConfigName.hermes,
      name: 'Hermes',
      imgSrc: '//vex.visurel.com/landing/assets/img/layouts/hermes.png',
      layout: 'vertical',
      boxed: true,
      sidenav: {
        state: 'expanded'
      },
      toolbar: {
        fixed: false
      },
      navbar: {
        position: 'below-toolbar'
      },
      footer: {
        visible: true,
        fixed: false
      }
    },
    {
      id: ConfigName.ares,
      name: 'Ares',
      imgSrc: '//vex.visurel.com/landing/assets/img/layouts/ares.png',
      layout: 'horizontal',
      boxed: false,
      sidenav: {
        state: 'expanded'
      },
      toolbar: {
        fixed: false
      },
      navbar: {
        position: 'in-toolbar'
      },
      footer: {
        visible: true,
        fixed: false
      }
    },
    {
      id: ConfigName.zeus,
      name: 'Zeus',
      imgSrc: '//vex.visurel.com/landing/assets/img/layouts/zeus.png',
      layout: 'horizontal',
      boxed: false,
      sidenav: {
        state: 'collapsed'
      },
      toolbar: {
        fixed: true
      },
      navbar: {
        position: 'below-toolbar'
      },
      footer: {
        visible: true,
        fixed: true
      }
    },
    {
      id: ConfigName.ikaros,
      name: 'Ikaros',
      imgSrc: '//vex.visurel.com/landing/assets/img/layouts/ikaros.png',
      layout: 'vertical',
      boxed: true,
      sidenav: {
        state: 'expanded'
      },
      toolbar: {
        fixed: false
      },
      navbar: {
        position: 'in-toolbar'
      },
      footer: {
        visible: true,
        fixed: false
      }
    },
  ];

  private _configSubject = new BehaviorSubject(this.configs.find(c => c.id === this.defaultConfig));
  config$ = this._configSubject.asObservable();

  constructor(@Inject(DOCUMENT) private document: Document,
              private layoutService: LayoutService) {
    this.config$.subscribe(config => this._updateConfig(config));
  }

  setConfig(config: ConfigName) {
    const settings = this.configs.find(c => c.id === config);

    if (settings) {
      this._configSubject.next(settings);
    }
  }

  updateConfig(config: DeepPartial<Config>) {
    this._configSubject.next(mergeDeep({ ...this._configSubject.getValue() }, config));
  }

  private _updateConfig(config: Config) {
    const body = this.document.body;

    this.configs.forEach(c => {
      if (body.classList.contains(c.id)) {
        body.classList.remove(c.id);
      }
    });

    body.classList.add(config.id);

    config.sidenav.state === 'expanded' ? this.layoutService.expandSidenav() : this.layoutService.collapseSidenav();

    // Workaround so charts and other externals know they have to resize on Layout switch
    if (window) {
      window.dispatchEvent(new Event('resize'));

      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 200);
    }
  }
}
