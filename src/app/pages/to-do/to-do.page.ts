import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormsModule,ReactiveFormsModule,Validators } from '@angular/forms';
import { AlertController,ToastController } from '@ionic/angular';
import { Itask } from 'src/app/interfaces/itask';
import { TasksService } from 'src/app/services/tasks.service';
import { NgFor, NgIf } from '@angular/common';



@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.page.html',
  styleUrls: ['./to-do.page.scss'],

})
export class ToDoPage  {
  tasks!:Itask[];
taskForm:FormGroup;

  constructor(
    private taskService:TasksService ,
    private toastController:ToastController,
    private alertController:AlertController,
     private formBuilder: FormBuilder,
    ) 
  {


    
  

this.taskForm = formBuilder.group({
name: ['', [Validators.required, ]], 
description: ['',],
date_of_start: [new Date(),[Validators.required]],
date_of_end: [new Date()],

});

//retrieves task data
taskService.getTask().subscribe((results)=>{
  this.tasks=results;
});
  }
 








onSubmit() {
  let task_data = this.taskForm.value;
 {
    this.taskService.createTask(task_data).subscribe((result) => {
      console.log(result);
      this.taskForm.reset(); // Clears form values
     
    });
  }
}

async presentToast(position: 'top' | 'middle' | 'bottom') {
  const toast = await this.toastController.create({
    message: ' Task Completed  ',
    duration: 1500,
    position: position
  });

  await toast.present();
}



    //getters 
    get nameFormControl() {
      return this.taskForm.get('name')!;
    }
    get descriptionFormControl() {
      return this.taskForm.get('description')!;
    }
    get date_of_startDateFormControl() {
      return this.taskForm.get('date_of_start')!;
    }
    get date_of_endFormControl() {
      return this.taskForm.get('date_of_end')!;
    }
   

}