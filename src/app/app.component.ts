import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
})
export class AppComponent  {
  appTitle  = "Alfred ";
  appStatus = true;
  appList   = [{
    "ID"    : "1",
    "Name"  : "Alfred",
    "url"   : "https://images.pexels.com/photos/398533/pexels-photo-398533.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
  },
  {
    "ID"    : "2",
    "Name"  : "Ken",
    "url"   : "https://images.pexels.com/photos/169908/pexels-photo-169908.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
  }];


 }
