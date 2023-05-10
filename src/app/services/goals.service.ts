import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Igoal } from '../interfaces/igoal';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  url="http://localhost:3500/goals";

  constructor(private http:HttpClient) { }

  getGoal(){
    return this.http.get<Igoal[]>(this.url);
  }


  getGoalInfo(goal_id:any){
   return this.http.get<Igoal>(this.url);
  }

createGoal(data:any){
return this.http.post<Igoal[]>(this.url,data);
}


}
