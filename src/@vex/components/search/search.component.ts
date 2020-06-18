import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { LayoutService } from '../../services/layout.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { filter } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'vex-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  show$ = this.layoutService.searchOpen$;
  searchCtrl = new FormControl();
  icClose = icClose;

  @ViewChild('searchInput', { static: true }) input: ElementRef;

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
    this.show$.pipe(
      filter(show => show),
      untilDestroyed(this)
    ).subscribe(() => this.input.nativeElement.focus());
  }

  close() {
    this.layoutService.closeSearch();
    this.searchCtrl.setValue(undefined);
  }

  search() {
    this.close();
  }

  ngOnDestroy(): void {}
}
