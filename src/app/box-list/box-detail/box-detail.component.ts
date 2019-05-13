import { Component, OnInit } from '@angular/core';
import { BoxListService } from '../box-list.service';
import { ActivatedRoute } from '@angular/router';
import { Box } from 'src/app/shared/box.model';


@Component({
  selector: 'app-box-detail',
  templateUrl: './box-detail.component.html',
  styleUrls: ['./box-detail.component.css']
})
export class BoxDetailComponent implements OnInit {
  detailBox: Box;
  detailId: number;

  constructor(
      private boxListService: BoxListService,
      private activatedRoute: ActivatedRoute
      ) { }

  ngOnInit() {
    this.detailId = +this.activatedRoute.snapshot.params['id'] || 0;

    this.activatedRoute.params
          .subscribe(params => {
              this.detailId = +params['id'] || 0;
    });

    this.detailBox = this.boxListService.getBox(this.detailId);
  }

}
