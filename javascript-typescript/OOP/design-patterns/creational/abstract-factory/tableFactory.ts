import { SmallTable } from "./smallTable";
import { MediumTable } from "./mediumTable";
import { BigTable } from "./bigTable";
import { ITable } from "./table";

export class TableFactory {
  static getTable(table: string): ITable {
    switch (table) {
      case "BigTable":
        return new BigTable();
      case "MediumTable":
        return new MediumTable();
      case "SmallTable":
        return new SmallTable();
      default:
        throw new Error("No Table Found");
    }
  }
}
