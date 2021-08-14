import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myTitleCase'
})
export class TitleCasePipePipe implements PipeTransform {

  transform(value: string): string {
      if (!value)
          return value
      let words = value.toLowerCase().split(" ")
      let prepositions = ["a", "an", "the", "aboard", "about", "above", "across", "after", "against", "along", "amid", "among", "anti", "around", "as", "at", "before", "behind", "below", "beneath", "beside", "besides", "between", "beyond", "but", "by", "concerning", "considering", "despite", "down", "during", "except", "excepting", "excluding", "following", "for", "from", "in", "inside", "into", "like", "minus", "near", "of", "off", "on", "onto", "opposite", "outside", "over", "past", "per", "plus", "regarding", "round", "save", "since", "than", "through", "to", "toward", "towards", "under", "underneath", "unlike", "until", "up", "upon", "versus", "via", "vs", "with", "within", "without"]

      for (let i = 0; i < words.length; i++) {
          if (i > 0 && prepositions.includes(words[i])) {
              continue
          }
          words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1)
      }
      return words.join(" ");
  }
}
