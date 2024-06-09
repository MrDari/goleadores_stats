import { Component } from '@angular/core';
import { DataService} from '../services/Data.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart-viewer',
  templateUrl: './ChartViewer.component.html',
  styleUrl: './ChartViewer.component.css'
})
export class ChartViewerComponent {
 pieChart : Chart
 barChart: Chart;
  constructor (private dService: DataService){
  }


  ngOnInit(){
    this.dService.obtenerStatsAsist().subscribe( (users : any []) => {
      console.log(users)
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
            text: 'Top 5 jugadores con más Asistencias'
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
      console.log(this.pieChart)
    }
    )
    this.dService.obtenerStatsYellow().subscribe( (users : any []) => {
    this.barChart=new Chart({
      chart: {
        type: 'column',
      },
      title: {
        text: 'Top 5 de Jugadores con más Tarjetas Amarillas'
       },

       xAxis: {
        categories: users.map(x => x.name)
      },
      yAxis: {
        title: {
          text: 'Tarjetas Amarillas'
        }
      },
      series: [
        {
          type: 'column',
          name: "Tarjetas Amarillas",
          data: users.map(x => x.yellow)
        },
      ],
    })
  })
    console.log(this.pieChart)
  }
}


