import {Component} from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  
}

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class FooterComponet {
    tiles3: Tile[] = [
        {text: 'Footer Notes Here. All rights reserved. Website Developed By - Arnav Technosys', cols:12, rows: 1, color: 'black'},
        
        ];
    
}