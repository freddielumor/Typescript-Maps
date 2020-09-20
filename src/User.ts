import faker from "faker";

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()), // convert to number as faker defines as string
      lng: parseFloat(faker.address.longitude()), // convert to number as faker defines as string
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
