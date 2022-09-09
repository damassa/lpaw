export interface ICirc {
    x: number;
    y: number;
    radius: number;
    color: string;
    speed: number;
    draw(CTX: CanvasRenderingContext2D): void;
  }