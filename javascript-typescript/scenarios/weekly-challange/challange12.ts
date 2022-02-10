// 3 class ortak özellikleri motosiklet araba kamyonet özellikler: isim, depo hacmi, 1km de yaktığı
// depo hacimleri 25-60-90
// km de yaktığı; 0.5 - 1.5 - 4.0
// istanbuldan yola çıkıyor full depo ile
// özellikler benzin almak
// kaç kere benzin aldı ? kaç km kaldı ?
// 3 ayrı obje
// motorbike car minivan
abstract class Vehicle {
  abstract name: string;
  abstract volume: number;
  abstract fuelPerKm: number;
  kmOfWay: number = 0;
  fuelStation: number = 0;

  constructor(kmOfWay: number) {
    this.kmOfWay = kmOfWay;
  }

  addFuel = (): void => {
    this.fuelStation += 1;

    console.log(
      `${this.volume / this.fuelPerKm}km yol kat edildi, ${
        this.fuelStation
      }. istasyondan ${this.volume} litre benzin alındı.Kalan yol ${
        this.kmOfWay
      }`
    );
  };

  drive = (): void => {
    this.kmOfWay -= this.volume / this.fuelPerKm;

    if (this.kmOfWay > this.volume / this.fuelPerKm) {
      this.addFuel();
      this.drive();
    } else {
      this.addFuel();
      console.log(
        `Hedefe ulaşıldı.Depoda ${
          this.volume / this.fuelPerKm - this.kmOfWay
        } litre benzin kaldı.`
      );
    }
  };
}

class Motorbike extends Vehicle {
  name: string = "motorbike";
  volume: number = 25;
  fuelPerKm: number = 0.5;

  constructor(kmOfWay: number) {
    super(kmOfWay);
  }
}

class Car extends Vehicle {
  name: string = "car";
  volume: number = 60;
  fuelPerKm: number = 1.5;

  constructor(kmOfWay: number) {
    super(kmOfWay);
  }
}

class Minivan extends Vehicle {
  name: string = "minivan";
  volume: number = 90;
  fuelPerKm: number = 4;

  constructor(kmOfWay: number) {
    super(kmOfWay);
  }
}

const goToAnkaraWithMoto = new Motorbike(497);
goToAnkaraWithMoto.drive();

// const goToUskudarWithMiniVan = new Minivan(789);
// goToUskudarWithMiniVan.drive();
