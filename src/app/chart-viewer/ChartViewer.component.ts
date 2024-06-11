import { Component } from '@angular/core';
import { DataService} from '../services/Data.service';
import { Chart } from 'angular-highcharts';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-chart-viewer',
  templateUrl: './ChartViewer.component.html',
  styleUrl: './ChartViewer.component.css'
})
export class ChartViewerComponent {
 pieChart : Chart
 barChart: Chart;
  constructor (private dService: DataService, public themeService: ThemeService ){
  }

  ngOnInit(){
    this.dService.GetAsistStats().subscribe( (users : any []) => {
      this.pieChart=new Chart({
        chart: {
          type: 'pie',
        },
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: true,
            },
            showInLegend: true
          },
        },

        title: {
            text: 'Top 5 Players with the Most Assists'
         },

        legend: {
          enabled: true,
        },
        colors: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'],
        series: [
          {
            type: 'pie',
            data: users,
          },
        ],
      })
    }
    )
    this.dService.GetYellowtStats().subscribe( (users : any []) => {
    this.barChart=new Chart({
      chart: {
        type: 'column',
      },
      title: {
        text: 'Top 5 Players with the Most Yellow Cards'
       },

       xAxis: {
        categories: users.map(x => x.name)
      },
      yAxis: {
        title: {
          text: 'Yellow Cards'
        }
      },
      series: [
        {
          type: 'column',
          name: "Yellow Cards",
          data: users.map(x => x.yellow)
        },
      ],
    })
  })
  }
}


