import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  options: any;
  map!: google.maps.Map;
  overlays!: any[];
  setMap(event: { map: google.maps.Map<Element>; }) {
    this.map = event.map;
}
  ngOnInit(): void {
    let bounds = new google.maps.LatLngBounds();

    this.options = {
      center: {lat: 36.890257, lng: 30.707417},
      zoom: 12
  }
  this.overlays = [
    new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:"Konyaalti"}),
    new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title:"Ataturk Park"}),
    new google.maps.Marker({position: {lat: 36.885233, lng: 30.702323}, title:"Oldtown"}),
    new google.maps.Polygon({paths: [
        {lat: 36.9177, lng: 30.7854},{lat: 36.8851, lng: 30.7802},{lat: 36.8829, lng: 30.8111},{lat: 36.9177, lng: 30.8159}
    ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35
    }),
    new google.maps.Circle({center: {lat: 36.90707, lng: 30.56533}, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500}),
    new google.maps.Polyline({path: [{lat: 36.86149, lng: 30.63743},{lat: 36.86341, lng: 30.72463}], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2})
];
this.overlays.forEach(marker => {
  bounds.extend(marker.getPosition());
});
setTimeout(()=> { // map will need some time to load
  this.map.fitBounds(bounds); // Map object used directly
}, 1000);
  }

  zoomIn(map: { setZoom: (arg0: any) => void; getZoom: () => number; }) {
    map.setZoom(map.getZoom()+1);
}
}
