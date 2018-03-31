import {Station} from './stations';


export class Course {
  id: number;
  name: string;
  location: string;
  stations: Station[];
  preview_image: string;
  description: string;
}
