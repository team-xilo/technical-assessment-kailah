import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'technical-interview-view-files',
  templateUrl: './view-files.component.html',
  styleUrls: ['./view-files.component.scss'],
})
export class ViewFilesComponent implements OnInit {
  users = [
    { userId: 1, name: 'Alice' },
    { userId: 2, name: 'Bob' },
    { userId: 3, name: 'Carlos' },
    { userId: 4, name: 'Daniel' },
    { userId: 5, name: 'Emma' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
