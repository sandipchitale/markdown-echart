import {Component, ElementRef} from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private elementRef: ElementRef)  {
  }

  onLoad() {
    this.elementRef.nativeElement.querySelectorAll('[echart]').forEach((element: HTMLDivElement) => {
      let eChartsType = echarts.init(element);
      const eChartOptions = element.getAttribute('echart-options');
      if (eChartOptions) {
        eChartsType.setOption(JSON.parse(eChartOptions));
      }
    })
  }
}
