import {Component} from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  
}

@Component({
  selector: 'grid-list-dynamic-example',
  templateUrl: './gridExample.component.html',
  styleUrls: ['gridExample.component.css'],
})
export class GridListDynamicExample {
  tiles: Tile[] = [
    {text: '', cols:1, rows: 2, color: 'white'},
    {text: 'image', cols: 1, rows: 2, color: 'white'},
    {text: '', cols: 4, rows: 1, color: 'white'},
    {text: 'Code,Approved by', cols: 2, rows: 2, color: 'white'},
    {text: 'College code here', cols: 2, rows: 2, color: 'white'},
    {text: '', cols: 2, rows: 2, color: 'white'},
  ];

  tiles1: Tile[] = [
    {text: 'Home', cols:1, rows: 1, color: 'black'},
    {text: 'About', cols: 1, rows: 1, color: 'black'},
    {text: 'Results', cols: 2, rows: 1, color: 'black'},
    {text: 'College Name Here', cols: 4, rows: 1, color: 'white'},
    {text: 'Admision Process', cols: 2, rows: 1, color: 'black'},
    {text: 'Committes', cols: 1, rows: 1, color: 'black'},
    {text: 'Contact', cols: 1, rows: 1, color: 'black'},

  ];

  tiles3: Tile[] = [
    {text: '', cols:12, rows: 1, color: 'white'},
    
    ];

  tiles2: Tile[] = [
    {text: 'Facilities', cols:1, rows: 1, color: 'black'},
    {text: 'Faculty', cols: 1, rows: 1, color: 'black'},
    {text: 'Departments', cols: 1, rows: 1, color: 'black'},
    {text: 'Event Gallery', cols: 1, rows: 1, color: 'black'},
    {text: 'Councils', cols: 1, rows: 1, color: 'black'},
    {text: 'T & P Cell', cols: 1, rows: 1, color: 'black'},
    {text: 'Research & Publication', cols: 2, rows: 1, color: 'black'},
    {text: 'Mandatory Disclosure', cols: 2, rows: 1, color: 'black'},
    {text: 'Downloads', cols: 1, rows: 1, color: 'black'},
    {text: 'SAR/NAAC Report', cols: 2, rows: 1, color: 'black'},
    ];
 }

