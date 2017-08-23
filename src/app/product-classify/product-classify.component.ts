import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-classify',
  templateUrl: './product-classify.component.html',
  styleUrls: ['./product-classify.component.css']
})
export class ProductClassifyComponent implements OnInit {

    private classify_id: number;
  constructor( private routerInfo: ActivatedRoute) { }

  ngOnInit() {
      this.classify_id = this.routerInfo.snapshot.params['id'];
  }

}
