import {Component} from '@angular/core';

@Component({
    selector: 'app-data-display',
    templateUrl: './data-display.component.html',
    styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent {
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
    isActive = true

    // Style binding
    // For more info on all the styles present, hit "DOM Style Object properties" in Google and use the W3s link
    backgroundColor = "#227edc"
    divWidth = "50%"

    // Event Binding
    onSave($event: MouseEvent) {
        $event.stopPropagation() // prevents the event bubbling
        console.log("button was clicked", $event)
    }

    onDivClicked() {
        console.log("div was clicked")
    }

    outerDivClicked() {
        console.log("outer div was clicked")
    }

    onKeyUp($event: KeyboardEvent) {
        console.log($event)
        if ($event.key == "Enter") {
            console.log("enter was pressed");
        }
    }

    onEnterUp() {
        console.log("enter was pressed");
    }

    // Element passed from there is called the template variable
    processTypedValue(element: HTMLInputElement) {
        let email = element.value
        console.log(email)
    }

    email1 = "abc@example.com";
    email2 = "xyz@example.com";

    emailProcessing1() {
        console.log(this.email1)
    }

    emailProcessing2() {
        console.log(this.email2)
    }

    emptyText() {
        this.email2 = ""
    }

    course = {
        title: "The Complete Angular Course",
        rating: 4.975,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016,3,1)
    }

    longText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    // for getting all formats, go to angular.io and search datepipe
}
