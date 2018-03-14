import {Stations} from './stations';
import Station = Stations.Station;

export class Course {
  id: number;
  title: string;
  location: string;
  stations: Station[];
  preview_image: string;
  description: string;
  entry: number;
}
