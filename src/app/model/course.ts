import {Waypoint} from "./waypoint";
import {ComponentModel} from './component-model';
import {PageItem} from './page-item';

export class Course {
  id: number;
  name: string;
  location: string;
  points: Waypoint[];
  preview_image: string;
  description: string;
  pages: ComponentModel[];
  pageComponents: PageItem[];
  entry: number;
}
