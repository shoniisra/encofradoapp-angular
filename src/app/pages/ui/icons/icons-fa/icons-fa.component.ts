import { Component, OnInit } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { iconsFA } from '../../../../../static-data/icons-fa';
import { scaleFadeIn400ms } from '../../../../../@vex/animations/scale-fade-in.animation';

@Component({
  selector: 'vex-icons-fa',
  templateUrl: './icons-fa.component.html',
  styleUrls: ['./icons-fa.component.scss'],
  animations: [
    scaleFadeIn400ms
  ]
})
export class IconsFaComponent implements OnInit {

  filteredIcons$ = this.route.queryParamMap.pipe(
    map(paramMap => paramMap.get('search')),
    startWith(''),
    map((value: string) =>
      Object.keys(iconsFA)
        .filter(key => key.includes((value || '').toLowerCase()))
        .reduce((prev, key) => {
          prev[key] = iconsFA[key];
          return prev;
        }, {})
    )
  );

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
