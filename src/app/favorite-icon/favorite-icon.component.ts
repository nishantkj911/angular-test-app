import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-favorite-icon',
    templateUrl: './favorite-icon.component.html',
    styleUrls: ['./favorite-icon.component.css'],
    inputs: ['textContent'], // only works if there is a field with the same name. Plus, refactoring doesnt work
})
export class FavoriteIconComponent {
    @Input("isFavorite") isFavorite: boolean = false; // adding the alias is recommended to account fo refactoring of code breaking for users of this field/event.
    textContent: string = "";

    @Output("favChanged") favChange = new EventEmitter()

    // @Input() info = { textContent, isFavorite: boolean};

    changeFill() { // Use this if additional logic required.
        this.isFavorite = !this.isFavorite;
        this.favChange.emit(<FavoriteChangeEvent>{favorite: this.isFavorite, content: this.textContent})
    }

    // ng-content is used to enable the user of the component to add custom content to it.
    // select field is used to distinguish between multiple ng-content's in the component. (not req. if there is only one ng-content)
}

export interface FavoriteChangeEvent {
    favorite: boolean
    content: string
}
