import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-main',
  templateUrl: './page-main.component.html',
  styleUrls: ['./page-main.component.css']
})
export class PageMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menu: string = "menu";
  content: string = "content";
  public contentActive: boolean = false;

  menubtn: string = "menubtn";
  // menu: string = "menu_active"
  expand() {
    if (this.menu === "menu") {
      this.menu = "menu-active"
    } else {
      this.menu = "menu"
    }

    this.contentActive = !this.contentActive;

    if (this.menubtn === "menubtn") {
      this.menubtn = "menubtn_active"
    } else {
      this.menubtn = "menubtn"
    }
  }


  // уберем
  name: string = '';
  email: string = '';
  password: string = '';

  test(): void {
    console.log(this.name)
  }
  normal(): void {
    let user_obj: object = {
      name: this.name,
      email: this.email,
      password: this.password,
    }
    let user_str: string = JSON.stringify(user_obj);
    localStorage.setItem('userinfo', user_str)
  }

}
