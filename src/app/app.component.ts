import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Task',url:'to-do', icon:'list' },
    { title: 'Goals', url: 'goals', icon: 'list' },
    { title: 'Notes', url: 'notes', icon: 'book' },
    { title: 'Achievements', url: 'achievements', icon: 'trophy' },
     { title: 'Video Diary', url: 'video-diary', icon: 'videocam' },
    { title: 'Image Diary', url: 'image-diary', icon: 'image' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
