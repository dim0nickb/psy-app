import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  positionLeft = '0px';
  positionRight = '0px';
  menuItems: MenuItem[] = [
    {text: 'профиль личности', link: ''},
    {text: 'о проекте', link: ''},
    {text: 'настройки', link: ''},
    {text: 'история', link: ''},
  ];

  constructor(public menuService: MenuService) { }

  ngOnInit() {
    this.menuService.menuVisible$
    .subscribe((isMenuVisible: boolean) => {
      this.positionLeft = isMenuVisible? '0px' : '-10000px';
      this.positionRight = isMenuVisible? '0px' : '10000px';
      // console.log(`positionLeft: ${this.positionLeft}, positionRight: ${this.positionRight}`)
    });
  }

  hideMenu() {
    console.log('hide menu');
    this.menuService.menuVisible$.next(false);
  }

}

interface MenuItem {
  text: string;
  link: string;
}