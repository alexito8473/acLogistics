import { AfterViewInit, Component, inject, OnDestroy, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { translations } from '../../../../translations/translations';
import { Language, LanguageService } from '../../../../services/language.service';
@Component({
  selector: 'app-ubication',
  templateUrl: './ubication.component.html',
  styleUrls: ['./ubication.component.css'],
})
export class UbicationComponent implements AfterViewInit, OnDestroy {
  private map!: L.Map;

  readonly translations = translations;

  // Coordenadas de la empresa
  private readonly latitude = 36.17555;
  private readonly longitude = -5.43553;

  // inject
  private languageService = inject(LanguageService);

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }

  ngOnInit(): void {}

  // get
  get currentLanguage(): Language {
    return this.languageService.currentLanguage();
  }

  // functions
  private initMap(): void {
    // Marcador personalizado.
    // NO utiliza marker-icon.png ni marker-shadow.png.
    const icon = L.divIcon({
      className: 'aclogistics-map-marker',

      html: `
    <div class="aclogistics-marker">
      <img
        src="/leaflet/marker-icon.png"
        alt="AcLogistics"
      />
    </div>
  `,

      iconSize: [46, 46],
      iconAnchor: [23, 46],
      popupAnchor: [0, -46],
    });

    // Crear mapa
    this.map = L.map('company-map', {
      center: [this.latitude, this.longitude],
      zoom: 18,
      scrollWheelZoom: false,
    });

    // OpenStreetMap
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,

      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    // Marcador de AcLogistics
    const marker = L.marker([this.latitude, this.longitude], {
      icon,
    }).addTo(this.map);

    // Popup
    marker.bindPopup(`
    <div class="map-popup">
      <strong>AcLogistics</strong>
      <br>
      Nuestra ubicación
    </div>
  `);

    // Abrir popup
    marker.openPopup();

    // Corregir tamaño del mapa
    setTimeout(() => {
      this.map.invalidateSize();
    }, 100);
  }
}
