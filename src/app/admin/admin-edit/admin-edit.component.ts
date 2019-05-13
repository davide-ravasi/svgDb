import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
  myform: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.myform = new FormGroup({
        name: new FormControl('', [
          Validators.required
        ]),
        image: new FormControl('', [
            Validators.required
        ]),
        tags: new FormControl('', [
            Validators.required
        ])
    });
  }
  onSubmit() {
    console.log(this.myform);
  }
}
