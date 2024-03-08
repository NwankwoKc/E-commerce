import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from './product';
import { apiService } from './Services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  
  welcome = true;
  width:number = 24;
  writesomething:string = 'Something'
  constructor(private myapiService:apiService){}
  jello():void{
    console.log('jello')
  }
  ngOnInit(): void {
    this.myapiService.get().subscribe(data=>{
      console.log(data)
    })
  }
  ngOnchanges():void {
    
  }
}
