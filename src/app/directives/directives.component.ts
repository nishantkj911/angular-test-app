import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
    // courses = ["Course 1", "Course 2", "Course 3"]
    courses: Course[]
        // courses = []
        /*
            Structural Directives change structure of the DOM element.
            Attribute Directives change attributes of DOM elements

            "hidden" attribute can be used to hide an element. But diff. between this and
            ngIf is, DOM element is there in the HTML page for ngIf, but present for hidden.

            General: Use ngIf for large structure and more children. Use hidden for smaller structure.
            If building the tree is costly operation, use hidden property.
         */
        | undefined
    // courses = []
    /*
        Structural Directives change structure of the DOM element.
        Attribute Directives change attributes of DOM elements

        "hidden" attribute can be used to hide an element. But diff. between this and
        ngIf is, DOM element is there in the HTML page for ngIf, but present for hidden.

        General: Use ngIf for large structure and more children. Use hidden for smaller structure.
        If building the tree is costly operation, use hidden property.
     */

    viewMode = 'blah'

    onRemove(i: number) {
         this.courses?.splice(i, 1);
    }

    onAdd() {
        this.courses?.push(<Course>{id: 100000 + this.courses?.length, name: "Course " + this.courses.length})
    }
    /*
        When courses are loaded, every single time we load it, it creates a new objects for existing elements,
        and also reloads the ul/li elements. It's fast but when dealing with larger data/complex structures, it'll cause performance overhead.

        By Default: Track by Memory (hence new objects created every time.
                    Track by custom. Define a method to track the object.
     */

    // trackCourseCustom(index: number, course: Course) {
    trackCourseCustom(index: number, course: Course) {
        return course ? course.id : undefined
    }

    loadCourses() {
        this.courses = [
            <Course>{id: 1000001, name: "Course A"},
            <Course>{id: 1000002, name: "Course B"}
        ]
    }
    /*
    * ngStyle Directive is an attribute directive which allows style binding with given expression condition
    *       syntax similar to ngClass
    * */

}

// TODO: See how to use enums for this purpose
export enum ViewMode {
    MapView, ListView
}

export interface Course {
    id: number,
    name: string
}
