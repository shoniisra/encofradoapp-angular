import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, startWith } from 'rxjs/operators';
import { scaleFadeIn400ms } from '../../../../../@vex/animations/scale-fade-in.animation';
import { iconsIC } from '../../../../../static-data/icons-ic';

@Component({
  selector: 'vex-icons-ic',
  templateUrl: './icons-ic.component.html',
  styleUrls: ['./icons-ic.component.scss'],
  animations: [
    scaleFadeIn400ms
  ]
})
export class IconsIcComponent implements OnInit {

  filteredIcons$ = this.route.queryParamMap.pipe(
    map(paramMap => paramMap.get('search')),
    startWith(''),
    map((value: string) =>
      Object.keys(iconsIC)
        .filter(key => key.includes((value || '').toLowerCase()))
        .reduce((prev, key) => {
          prev[key] = iconsIC[key];
          return prev;
        }, {})
    )
  );

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
