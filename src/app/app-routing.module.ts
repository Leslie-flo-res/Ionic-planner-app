import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Planner',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'to-do',
    loadChildren: () => import('./pages/to-do/to-do.module').then( m => m.ToDoPageModule)
  },
  {
    path: 'add-task',
    loadChildren: () => import('./pages/add-task/add-task.module').then( m => m.AddTaskPageModule)
  },
  {
    path: 'goals',
    loadChildren: () => import('./pages/goals/goals.module').then( m => m.GoalsPageModule)
  },
  {
    path: 'add-goals',
    loadChildren: () => import('./pages/add-goals/add-goals.module').then( m => m.AddGoalsPageModule)
  },
  {
    path: 'achievements',
    loadChildren: () => import('./pages/achievements/achievements.module').then( m => m.AchievementsPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./pages/notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'add-notes',
    loadChildren: () => import('./pages/add-notes/add-notes.module').then( m => m.AddNotesPageModule)
  },
  {
    path: 'video-diary',
    loadChildren: () => import('./pages/video-diary/video-diary.module').then( m => m.VideoDiaryPageModule)
  },
  {
    path: 'image-diary',
    loadChildren: () => import('./pages/image-diary/image-diary.module').then( m => m.ImageDiaryPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
