import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoxListService } from 'src/app/box-list/box-list.service';
import { Box } from 'src/app/shared/box.model';
import { Tag } from 'src/app/shared/tag.model';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  boxList: Box[];
  constructor(private boxListService: BoxListService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.boxList = this.boxListService.getBoxes();
  }
  onAddBox() {
    this.router.navigate(['/admin','edit']);
  }
}
