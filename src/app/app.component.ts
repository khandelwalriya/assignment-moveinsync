import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators
} from '@angular/forms';
import { DataService } from './data.service';

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
  	private dataService:DataService
  ){}

  ngOnInit() {
		this.matForm =  this.formBuilder.group({
			date : new FormControl(""),
			range: new FormControl("")
		});
	}

	resultedJson:any;
  onChange(event){
  	this.dataService.getData().subscribe((data)=>{
  		this.resultedJson = data;
  	})
  }
}
