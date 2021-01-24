import { Component, OnInit } from '@angular/core';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'psy-app';

  constructor(public menuService: MenuService) {
  }

  ngOnInit(): void {
    
  }

  showMenu() {
    console.log('show menu');
    this.menuService.menuVisible$.next(true);
  }
}
