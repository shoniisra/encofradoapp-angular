import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { LayoutService } from '../services/layout.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { NavigationEnd, Router, Scroll } from '@angular/router';
import { filter, map, startWith, withLatestFrom } from 'rxjs/operators';
import { checkRouterChildsData } from '../utils/check-router-childs-data';
import { DOCUMENT } from '@angular/common';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { ConfigService } from '../services/config.service';
import theme from '../utils/tailwindcss';

@Component({
  selector: 'vex-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit, OnDestroy {

  isLayoutVertical$ = this.configService.config$.pipe(map(config => config.layout === 'vertical'));
  isBoxed$ = this.configService.config$.pipe(map(config => config.boxed));
  isToolbarFixed$ = this.configService.config$.pipe(map(config => config.toolbar.fixed));
  isFooterFixed$ = this.configService.config$.pipe(map(config => config.footer.fixed));
  isFooterVisible$ = this.configService.config$.pipe(map(config => config.footer.visible));
  sidenavCollapsed$ = this.layoutService.sidenavCollapsed$;

  isDesktop$ = this.breakpointObserver.observe(`(min-width: ${theme.screens.lg})`).pipe(
    map(state => state.matches)
  );

  toolbarShadowEnabled$ = this.router.events.pipe(
    filter<NavigationEnd>(event => event instanceof NavigationEnd),
    startWith(null),
    map(() => checkRouterChildsData(this.router.routerState.root.snapshot, data => data.toolbarShadowEnabled))
  );

  scrollDisabled$ = this.router.events.pipe(
    filter<NavigationEnd>(event => event instanceof NavigationEnd),
    startWith(null),
    map(() => checkRouterChildsData(this.router.routerState.root.snapshot, data => data.scrollDisabled))
  );

  containerEnabled$ = this.router.events.pipe(
    filter<NavigationEnd>(event => event instanceof NavigationEnd),
    startWith(null),
    map(() => checkRouterChildsData(this.router.routerState.root.snapshot, data => data.containerEnabled))
  );

  searchOpen$ = this.layoutService.searchOpen$;

  @ViewChild('quickpanel', { static: true }) quickpanel: MatSidenav;
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;
  @ViewChild('configpanel', { static: true }) configpanel: SidebarComponent;
  @ViewChild(MatSidenavContainer, { static: true }) sidenavContainer: MatSidenavContainer;

  constructor(private cd: ChangeDetectorRef,
              private breakpointObserver: BreakpointObserver,
              private layoutService: LayoutService,
              private configService: ConfigService,
              private router: Router,
              @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.isDesktop$.pipe(
      filter(matches => !matches),
      untilDestroyed(this)
    ).subscribe(() => this.layoutService.expandSidenav());

    this.layoutService.quickpanelOpen$.pipe(
      untilDestroyed(this)
    ).subscribe(open => open ? this.quickpanel.open() : this.quickpanel.close());

    this.layoutService.sidenavOpen$.pipe(
      untilDestroyed(this)
    ).subscribe(open => open ? this.sidenav.open() : this.sidenav.close());

    this.layoutService.configpanelOpen$.pipe(
      untilDestroyed(this)
    ).subscribe(open => open ? this.configpanel.open() : this.configpanel.close());

    this.router.events.pipe(
      filter<NavigationEnd>(event => event instanceof NavigationEnd),
      withLatestFrom(this.isDesktop$),
      filter(([event, matches]) => !matches),
      untilDestroyed(this)
    ).subscribe(() => this.sidenav.close());
  }

  ngAfterViewInit(): void {
    this.router.events.pipe(
      filter<Scroll>(e => e instanceof Scroll),
      untilDestroyed(this)
    ).subscribe(e => {
      if (e.position) {
        // backward navigation
        this.sidenavContainer.scrollable.scrollTo({
          start: e.position[0],
          top: e.position[1]
        });
      } else if (e.anchor) {
        // anchor navigation

        const scroll = (anchor: HTMLElement) => this.sidenavContainer.scrollable.scrollTo({
          behavior: 'smooth',
          top: anchor.offsetTop,
          left: anchor.offsetLeft
        });

        let anchorElem = this.document.getElementById(e.anchor);

        if (anchorElem) {
          scroll(anchorElem);
        } else {
          setTimeout(() => {
            anchorElem = this.document.getElementById(e.anchor);
            scroll(anchorElem);
          }, 100);
        }
      } else {
        // forward navigation
        this.sidenavContainer.scrollable.scrollTo({
          top: 0,
          start: 0
        });
      }
    });
  }

  openConfigPanel() {
    this.configpanel.open();
  }

  ngOnDestroy(): void {}
}
