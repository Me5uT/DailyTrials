import { Dimension } from "./dimensionModel";

export interface ITable {
  name: string;
  height: number;
  width: number;
  depth: number;

  getDimensions(): Dimension;
}

export class Table implements ITable {
  name: string = "";
  height: number = 0;
  width: number = 0;
  depth: number = 0;

  getDimensions(): Dimension {
    return {
      width: this.width,
      height: this.width,
      depth: this.depth,
    };
  }
}
