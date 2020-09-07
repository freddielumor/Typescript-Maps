// Private CustomMap class
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(mapId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(mapId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
}
