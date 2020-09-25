import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {



  constructor(private settingService: SettingsService) { }

  ngOnInit(): void {
    customInitFunctions(); //l'ho definita io di maniera globale in ./assets/js/custom.js senno dava problemi dopo il Logout/login con un ricaricamento di tutto dopo il login
  }

}
