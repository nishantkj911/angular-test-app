import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
    // courses = ["Course 1", "Course 2"]
    courses = []
    /*
        Structural Directives change structure of the DOM element.
        Attribute Directives change attributes of DOM elements

        "hidden" attribute can be used to hide an element. But diff. between this and
        ngIf is, DOM element is there in the HTML page for ngIf, but present for hidden.

        General: Use ngIf for large structure and more children. Use hidden for smaller structure.
        If building the tree is costly operation, use hidden property.
     */

    viewMode = 'blah'
}

// TODO: See how to use enums for this purpose
export enum ViewMode {
    MapView, ListView
}
