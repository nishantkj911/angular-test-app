import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-icon',
  templateUrl: './favorite-icon.component.html',
  styleUrls: ['./favorite-icon.component.css']
})
export class FavoriteIconComponent  {

    fillColor = "#000"
    isFavorite = false

    changeFill() { // Use this if additional logic required.
        this.isFavorite = !this.isFavorite;
    }
}
