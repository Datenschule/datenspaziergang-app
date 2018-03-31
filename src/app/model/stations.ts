import {Point} from './point';


export class Station {
  id: number;
  title: string;
  position: Point;
  pages: any[];
  entry: number;
}

export class StoryPage {
  id: number;
  img: string;
  content: string;
  title: string;
  next: number;
}
