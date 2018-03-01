import { NgModule, ModuleWithProviders } from '@angular/core';

import { MapboxComponent } from './components/mapbox/mapbox.component';
import { MapboxMarkerDirective } from './components/mapbox-marker/mapbox-marker.component';
import { MapboxMarkerDirectionComponent } from './components/mapbox-marker-direction/mapbox-marker-direction.component';
import { MapboxLineDirective } from './components/mapbox-line/mapbox-line.component';

@NgModule({
  exports: [
    MapboxComponent, MapboxMarkerDirective, MapboxMarkerDirectionComponent, MapboxLineDirective
  ],
  declarations: [MapboxComponent, MapboxMarkerDirective, MapboxMarkerDirectionComponent, MapboxLineDirective]
})
export class MapboxModule {
  static forRoot(config: String) {
    return {
      ngModule: MapboxModule,
      providers: [
        { provide: 'MAPBOX_KEY', useValue: config }
      ]
    };
  }
}
