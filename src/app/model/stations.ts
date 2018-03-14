import {Point} from './point';

export namespace Stations {

  export interface Station {
    id: number;
    next: number;
    prev: number;
    title: string;
  }

  export class OverviewStation implements Station {
    id: number;
    next: number;
    prev: number;
    title: string;
    waypoints: Point[];
  }

  export class PointToPointStation implements Station {
    id: number;
    next: number;
    prev: number;
    title: string;
    start: Point;
    finish: Point;
  }

  export class StoryStation implements Station {
    id: number;
    next: number;
    prev: number;
    title: string;
    img: string;
    content: string;
  }

  export class QuizStation implements Station {
    id: number;
    next: number;
    prev: number;
    title: string;
    question: string;
    answers: string[];
    correct: number;
    wrongMessage: string;
    correctMessage: string;
  }

  export class SuccessStation implements Station {
    id: number;
    next: number;
    prev: number;
    title: string;
    message: string;
  }

  export class BerlinTreeStation implements Station {
    id: number;
    next: number;
    prev: number;
    title: string;
    address: string;
  }

}
