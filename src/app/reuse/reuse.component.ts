import { Component, OnInit } from '@angular/core';
import {FavoriteChangeEvent} from "../favorite-icon/favorite-icon.component";

@Component({
  selector: 'app-reuse',
  templateUrl: './reuse.component.html',
  styleUrls: ['./reuse.component.css']
})
export class ReuseComponent implements OnInit {
    info = {
        title: "Rating",
        isFavorite: true
    };
  constructor() { }

  ngOnInit(): void {
  }

  onFavChanged(eventArgs: FavoriteChangeEvent) {
      eventArgs.favorite ? console.log("I am Favorite!!"):null;
  }
}
