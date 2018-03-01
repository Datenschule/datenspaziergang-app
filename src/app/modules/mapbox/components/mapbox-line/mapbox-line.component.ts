import {Directive, Input, OnInit} from '@angular/core';
import {MapBoxService} from '../../services/mapbox/mapbox-service.service';

@Directive({
  selector: 'mapbox-line',
})
export class MapboxLineDirective implements OnInit {

  @Input() id: string;
  @Input() line: number[][];
  @Input() color = '#000';
  @Input() lineWidth = 8;
  @Input() lineJoin = "round";
  @Input() lineCap = "round";

  constructor(private mapboxService: MapBoxService) { }

  ngOnInit() {
    this.mapboxService.Line(this.id, this.line,
      {"line-join": this.lineJoin, "line-cap": this.lineCap},
      {"line-color": this.color, "line-width": this.lineWidth}
      );
  }

}
