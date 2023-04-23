import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() { // In the ngOnInit() or in the constructor
    // const el = document.getElementById('nb-global-spinner');
    // if (el) {
    //   el.style['display'] = 'none';
    // }
}

}
