import {Point} from './point';

export class Station {
  id: number;
  name: string;
  position: Point;
  pages: any[];
  entry: number;
  subjects: Subject[];
}

export class StoryPage {
  id: number;
  img: string;
  content: string;
  title: string;
  next: number;
}

export class Subject {
  id: number;
  name: string;
  description: string;
  entry: number;
  next: number;
  pages: any[];
}
