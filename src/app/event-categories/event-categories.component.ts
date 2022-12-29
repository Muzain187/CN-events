import { Component, OnInit } from '@angular/core';
import { HTTPService } from '../http.service';


@Component({
  selector: 'app-event-categories',
  templateUrl: './event-categories.component.html',
  styleUrls: ['./event-categories.component.css']
})
export class EventCategoriesComponent implements OnInit {
  category = 'ALL_EVENTS';
  subcategory = 'Upcoming';
  tags = 'Career Guidance,Coding Concepts,Competitive Programming,Futuristic Tech,Online Coding Event';
  offset = 2;
  Tags:any;
  constructor(public httpService:HTTPService){}


  Events(x:any){
    console.log(x);
    this.category = x;
    console.log(this.category," ",this.subcategory)
    console.log(this.Tags);
    this.httpService.getAPI(this.category,this.subcategory,this.tags).subscribe(Data=>console.log("Events ",this.httpService.AllEvents=Data.data.events));
  }
  SubEvents(y:any){
    console.log(y);
    this.subcategory = y;
    this.httpService.getAPI(this.category,this.subcategory,this.tags).subscribe(Data=>console.log(this.httpService.AllEvents=Data.data.events));
  }
  TagEvents(z:any){
    console.log(z);
    if(z.length >= 1){
      let TagStr = "";
      z.forEach((val: string) => {
        TagStr += val + ",";
      });
      TagStr = TagStr.substring(0,TagStr.length-1);
      console.log("Tag =>",TagStr);
      this.tags = TagStr
      this.httpService.getAPI(this.category,this.subcategory,this.tags).subscribe(Data=>console.log(this.httpService.AllEvents=Data.data.events));

    }
  }
  ngOnInit(): void {
    this.httpService.getAPI().subscribe(Data => console.log(Data.data));
    let a = this.httpService.getAPI().subscribe(Data => console.log(this.httpService.AllEvents = Data.data.events));
    let b = this.httpService.getTags().subscribe(Tags => console.log("Done ",this.httpService.Tagobj = Tags.data.tags));
  }
}
