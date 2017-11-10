import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'struct-controller',
  template: `
    <h3>{{title}}</h3>
    <p>{{description}}</p>
    <div *ngFor="let dataset of datasets">
        <div *ngIf="dataset.type == 'text'">
            <ion-label color="primary" stacked>{{dataset.varName}}</ion-label>
            <ion-input type="{{dataset.type}}" [(ngModel)]="resultData[dataset.varName]"></ion-input>
        </div>
    <div *ngIf="dataset.type == 'number'">
        <ion-label color="primary" stacked>{{dataset.varName}}</ion-label>
        <ion-input type="{{dataset.type}}" [(ngModel)]="resultData[dataset.varName]" [min]="dataset.minVal" [max]="dataset.maxVal"></ion-input>
    </div>
    </div>
    <button ion-button full (click)="send()"></button>
  `
})  
export class StructController {

    @Input() name;
    @Input() description;
    @Input() datasets;
    @Output() event = new EventEmitter <String>();
    resultData = [];
    
constructor(){

    
}

  send(){
      let result = "{";
      this.datasets.map( (v, i) => {
        result += '"'+v.varName+'":"'+this.resultData[v.varName]+'"'
        if(i != this.datasets.length-1) result+=',';
      });
      result += "}";
      this.event.next(result);
  }
}