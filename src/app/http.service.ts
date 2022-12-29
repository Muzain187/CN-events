import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class HTTPService {
  AllEvents: any[]
  Tagobj:any[]


  constructor(private http:HttpClient) {
    this.AllEvents=[];
    this.Tagobj=[];
  }
  // url = 'https://api.codingninjas.com/api/v3/events?event_category=ALL_EVENTS&event_sub_category=Upcoming&tag_list=Career%20Guidance,Coding%20Concepts,Competitive%20Programming,Futuristic%20Tech&offset=0'
  getAPI(category="ALL_EVENTS",subcategory="Upcoming",tagList="Career Guidance,Coding Concepts,Competitive Programming,Futuristic Tech,Online Coding Event "):Observable<any>{
    return this.http.get<any>(`https://api.codingninjas.com/api/v3/events?event_category=${category}&event_sub_category=${subcategory}&tag_list=${tagList}&offset=0`);
    // return this.AllEvents;
  }
  getTags():Observable<any>{
    return this.http.get<any>('https://api.codingninjas.com/api/v3/event_tags');
  }
}
