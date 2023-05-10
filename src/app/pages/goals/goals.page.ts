import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Igoal } from 'src/app/interfaces/igoal';
import { GoalsService } from 'src/app/services/goals.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
})
export class GoalsPage implements OnInit {
  goals!:Igoal[];

  constructor(private goalService:GoalsService ,private toastController:ToastController,) 
  {goalService.getGoal().subscribe((results)=>{
    this.goals=results;
});
}


async presentToast(position: 'top' | 'middle' | 'bottom') {
  const toast = await this.toastController.create({
    message: ' Task Completed  ',
    duration: 1500,
    position: position
  });

  await toast.present();
}

  ngOnInit() {
  }

}
