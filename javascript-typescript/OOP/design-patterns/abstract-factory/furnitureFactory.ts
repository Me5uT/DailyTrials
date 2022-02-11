import { TableFactory } from "./tableFactory";
import { ChairFactory } from "./chairFactory";
import { ITable } from "./table";
import { IChair } from "./chair";

interface IFurniture extends IChair, ITable {}

export class FurnitureFactory {
  static getFurniture(furniture: string): IFurniture | undefined {
    try {
      if (["SmallChair", "MediumChair", "BigChair"].indexOf(furniture) > -1) {
        return ChairFactory.getChair(furniture);
      }

      if (["SmallTable", "MediumTable", "BigTable"].indexOf(furniture) > -1) {
        return TableFactory.getTable(furniture);
      }
      throw new Error("Invalid Furniture");
    } catch (e) {
      console.log(e);
    }
  }
}
