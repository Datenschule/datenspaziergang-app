import {Station} from './stations';

export class Course {
  id: number;
  author: string;
  name: string;
  location: string;
  stations: Station[];
  preview_image: string;
  description: string;
  entry: number;
  courseline: Array<[number, number]>
}
