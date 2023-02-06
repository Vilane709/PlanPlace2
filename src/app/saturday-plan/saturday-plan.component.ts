import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saturday-plan',
  templateUrl: './saturday-plan.component.html',
  styleUrls: ['./saturday-plan.component.css']
})
export class SaturdayPlanComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}


  addWork() {
    console.log('Не знаю как обратиться к work_bloks из другого документа, чтобы создать ему дочерний. Еще нужно в новый блок вписывать его название. При нажатии правой кнопки мыши, отображать кнопку удаления.')
  }

  addPlan() {
    console.log('Не знаю как обратиться к plan_bloks из другого документа, чтобы создать ему дочерний. Могу ли я в grid-template-columns поставить переменные как количества фракций/процентов? Как поставить один блок поверх другого.')
  }

  addText() {
    console.log('Не знаю как добавить нужный текст кнопке')
  }
}
