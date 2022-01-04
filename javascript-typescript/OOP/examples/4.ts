enum GearBoxModel {
  Manuel = "Manuel",
  Auto = "Auto",
}

class Car {
  protected model: string;
  protected gearBox: GearBoxModel;
  protected horsePower: number;

  constructor(model: string, gearBox: GearBoxModel, horsePower: number) {
    this.model = model;
    this.gearBox = gearBox;
    this.horsePower = horsePower;
  }

  getModel = () => {
    return this.model;
  };

  setModel = (model: string) => {
    this.model = model;
  };

  getGearBox = () => {
    return this.gearBox;
  };

  setGearBox = (gearBox: GearBoxModel) => {
    this.gearBox = gearBox;
  };

  getHorsePower = () => {
    return this.horsePower;
  };

  setHorsePower = (horsePower: number) => {
    this.horsePower = horsePower;
  };

  promotionLog() {
    return `This car ${this.getModel()} model and ${this.getGearBox()} vehicle.
       The horse power of this vehicle is ${this.getHorsePower()}.`;
  }
}

class Ferrari extends Car {
  private static brand: string = "Ferrari";
  count: number = 1;

  constructor(model: string, gearBox: GearBoxModel, horsePower: number) {
    super(model, gearBox, horsePower);
  }

  getBrand = () => {
    return Ferrari.brand;
  };

  promotionLog2 = (): string => {
    return `This is a ${this.getBrand()}. ${super.promotionLog()}`;
  };
}

const f40 = new Ferrari("F40", GearBoxModel.Auto, 200);
console.log(f40.promotionLog2());
