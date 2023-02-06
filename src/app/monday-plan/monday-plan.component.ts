import { Component, OnInit } from '@angular/core';
// import { PlanWorkPopupService } from '../shared/services/plan-work-popup.service';

@Component({
  selector: 'app-monday-plan',
  templateUrl: './monday-plan.component.html',
  styleUrls: ['./monday-plan.component.css'],
  providers: [
    // PlanWorkPopupService
  ]
})
export class MondayPlanComponent implements OnInit {

  public works: string[] = [
    'Сон', 'Гимнастика', 'Чтение', 'Прогулка'
  ];

  constructor(
    // private planWorkPopupService: PlanWorkPopupService
  ) { }
  ngOnInit(): void { }


  addWork() {
    console.log('Добавить еще одну кнопку к спану work_bloks, наименовать ее.')
  }

  public addPlan(work: string): void {
    // this.planWorkPopupService.createPopup(work);
    console.log('Могу ли я в grid-template-columns поставить переменные как количества фракций/процентов?')
  }

  deleteButton() {
    console.log('Отобразить рядом крестик, удаляющий кнопку.')
  }
}
