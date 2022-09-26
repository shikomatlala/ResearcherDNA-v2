import { Component, OnInit } from '@angular/core';
import { OptionsService } from './options.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(private optionsService: OptionsService) { }
  options:any;
  ngOnInit(): void {
    console.log(this.optionsService.guidelines(1).subscribe((res)=>{
      console.log(res.guidelines);
      this.options = res.guidelines;
    }) )
  }

}
