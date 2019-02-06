import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators
} from '@angular/forms';
import { DataService } from './data.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataService]
})
export class AppComponent {
  title = 'assignment-moveinsync';
  matForm : FormGroup;

  constructor(
  	private formBuilder : FormBuilder,
  	private dataService:DataService,
  	private spinnerService: Ng4LoadingSpinnerService
  ){}

  ngOnInit() {
		this.matForm =  this.formBuilder.group({
			date : new FormControl(""),
			range: new FormControl("")
		});
	}

	resultedJson:any;
  onChange(event){
    this.spinnerService.show();
  	this.dataService.getData().subscribe((data)=>{
  		this.resultedJson = data;
      this.spinnerService.hide();
  	})
  }
}
