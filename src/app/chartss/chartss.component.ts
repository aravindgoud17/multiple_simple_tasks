import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { GraphsService } from '../graphs.service';

@Component({
  selector: 'app-chartss',
  templateUrl: './chartss.component.html',
  styleUrls: ['./chartss.component.scss']
})
export class ChartssComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public details1 = [];
  public pieChartLabels: Label[] =[]
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  
  public pieChartLegend = true;
  public pieChartPlugins = [];
  aaa:any;

  constructor( private graphdata:GraphsService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    this.aaa = this.graphdata.getdetails1();
    this.pieChartLabels=this.aaa.map((item:any)=>{return item.name})
    
    this.pieChartData = this.aaa.map((item:any)=>{return item.marks})
  }

  ngOnInit() {
    console.log(this.aaa);
    }
    
}
