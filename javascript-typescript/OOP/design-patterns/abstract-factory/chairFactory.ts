import { SmallChair } from "./smallChair";
import { MediumChair } from "./mediumChair";
import { BigChair } from "./bigChair";
import { IChair } from "./chair";

export class ChairFactory {
  static getChair(chair: string): IChair {
    switch (chair) {
      case "BigChair":
        return new BigChair();
      case "MediumChair":
        return new MediumChair();
      case "SmallChair":
        return new SmallChair();
      default:
        throw new Error("No Chair Found");
    }
  }
}
