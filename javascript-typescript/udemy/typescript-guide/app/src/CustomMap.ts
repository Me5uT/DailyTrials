import { Company } from "./Company";
import { User } from "./User";

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 5,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng,
      },
    });
  }

  addMarker(item: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: item.location.lat,
        lng: item.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: item.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
