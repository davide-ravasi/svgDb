import { Component, OnInit } from '@angular/core';
import { BoxListService } from './box-list.service';
import { Box } from '../shared/box.model';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.css']
})
export class BoxListComponent implements OnInit {
  boxList: Box[];
  constructor(private boxListService: BoxListService) { }

  ngOnInit() {
      this.boxList = this.boxListService.getBoxes();
      console.log(this.boxList);
  }

}
