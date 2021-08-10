import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent{
  title = "Data Display Section"

  // What this is done in HTML is called property binding. and can be done in another way.
  img1Src = "https://images.pexels.com/photos/258109/pexels-photo-258109.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

  // Work only component to DOM. If i make change here it updates in site, but not the other way round.
  // For input fields, need to use attribute binding.
  img2Src = "https://images.newindianexpress.com/uploads/user/imagelibrary/2019/3/7/w600X390/Take_in_the_Scenery.jpg"

  username = ""
  /*
      DOM represent structure of element
      HTML is language to represent the DOM.

      Most attributes have 1-1 mapping.
      ex. colSpan property doesnt exist in HTML.
      ex. textContent doesnt exist in HTML too.
  */
  colSpan = 2
}
