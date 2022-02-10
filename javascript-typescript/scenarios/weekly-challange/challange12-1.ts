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

  drive = (km: number): void => {
    if (this.fuelStation == 0) {
      console.log("Yolculuk başladı");
    }
    this.kmOfWay = km - this.volume / this.fuelPerKm;

    if (this.kmOfWay > this.volume / this.fuelPerKm) {
      this.addFuel();
      this.drive(this.kmOfWay);
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
  name: string;
  volume: number;
  fuelPerKm: number;

  constructor(name: string, volume: number, fuelPerKm: number) {
    super();
    this.name = name;
    this.volume = volume;
    this.fuelPerKm = fuelPerKm;
  }
}

class Car extends Vehicle {
  name: string;
  volume: number;
  fuelPerKm: number;

  constructor(name: string, volume: number, fuelPerKm: number) {
    super();
    this.name = name;
    this.volume = volume;
    this.fuelPerKm = fuelPerKm;
  }
}

class Minivan extends Vehicle {
  name: string;
  volume: number;
  fuelPerKm: number;

  constructor(name: string, volume: number, fuelPerKm: number) {
    super();
    this.name = name;
    this.volume = volume;
    this.fuelPerKm = fuelPerKm;
  }
}
const goToAnkaraWithMoto = new Motorbike("motosiklet", 25, 0.5);
goToAnkaraWithMoto.drive(497);

// const goToUskudarWithMiniVan = new Minivan("minivan",60,1.5);
// goToUskudarWithMiniVan.drive();
