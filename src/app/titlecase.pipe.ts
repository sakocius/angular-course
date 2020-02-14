import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecaser'
})
export class TitlecasePipe implements PipeTransform {

  transform(value: string) {
    let titleString = value.toLowerCase().split(' ');
    let ignoreList = ['the', 'and', 'of', 'or', 'a', 'an', 'for', 'as']
    return titleString.map((word, i) => {
      if (!ignoreList.includes(word) || i === 0){
        return word.replace(word[0], word[0].toUpperCase());
      } else {
        return word;
      }
    }).join(' ');
  }

}
