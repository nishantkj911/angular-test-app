import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-case',
  templateUrl: './title-case.component.html',
  styleUrls: ['./title-case.component.css']
})
export class TitleCaseComponent{
    editedFieldContent = ""

    editContent($event: any) {
        let text: string = $event.target.value
        text = text.toLowerCase()

        let words = text.split(" ")
        console.log(words)
        for (let i=0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1)
        }

        this.editedFieldContent = words.join(" ")
    }
}
