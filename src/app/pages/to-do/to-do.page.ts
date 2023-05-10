import { Component, OnInit } from '@angular/core';
import { AlertController,ToastController } from '@ionic/angular';
import { Itask } from 'src/app/interfaces/itask';
import { TasksService } from 'src/app/services/tasks.service';



@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.page.html',
  styleUrls: ['./to-do.page.scss'],
})
export class ToDoPage implements OnInit {
  tasks!:Itask[];


  constructor(private taskService:TasksService ,private toastController:ToastController,private alertController:AlertController) 
  {taskService.getTask().subscribe((results)=>{
    this.tasks=results;
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

// add task FAB
async presentAlertPrompt(){
  const alert= await this.alertController.create({
    header:'Add Task',
inputs:[
  {
   name:'name',
    type: 'text',
    placeholder: 'Task Name' ,
     
  },
  {
    name:'description',
    type: 'textarea',
    placeholder: 'Task Description ',
    attributes: {
      maxlength:150,
    },
  },
  {
    name:'date_of_start',
    type: 'datetime-local',
    placeholder: 'Date',
    
  },
  {
    name:'date_of_end',
    type: 'date',
    placeholder: 'Date',
    
    
  },
],
buttons: [
  {
    text: 'Cancel',
    role: 'cancel',
   handler: () => {
      console.log(' Cancelled');
    }
  }, 
  {
    text: 'Add',
    role: 'addTask',
    handler: (result) => {
      this.taskService.createTask(this.tasks).subscribe((result) => {
        console.log(result);
      });
    },
   },
 
   ], 
   });

  

await alert.present();
let result = await alert.onDidDismiss();
console.log(result);
}
 

// });
// }    await alert.present();
// let result = await alert.onDidDismiss();
// console.log(result);


  ngOnInit() {}

}