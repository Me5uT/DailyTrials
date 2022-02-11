import { FurnitureFactory } from "./furnitureFactory";

const furniture = FurnitureFactory.getFurniture("SmallChair");

console.log(furniture?.name);

const notFurniture = FurnitureFactory.getFurniture("SmallHouse");

console.log(notFurniture?.name);
