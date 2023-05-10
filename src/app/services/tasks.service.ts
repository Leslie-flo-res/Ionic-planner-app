import { Injectable } from '@angular/core';
import { Itask } from '../interfaces/itask';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TasksService {
url="http://localhost:3500/tasks";

  constructor(private http:HttpClient) { }

  getTask(){
    return this.http.get<Itask[]>(this.url);
  }

createTask(data:any){
return this.http.post<Itask>(this.url,data);
}

  // getTaskInfo(task_id:any){
  //  return this.http.get<Itask>(this.url);
  // }

  // deleteTask(task_id:number){
  //   return this.http.delete<Itask>(this.url + "/" + task_id)
  // }


// updateTask(data:any,task_id:number){
// return this.http.put<Itask>(this.url+ "/" + task_id, data);
// }
  // getTask(): Observable<any>{
  //   return this.http.get<Itask[]>(this.url);
  // }



}
