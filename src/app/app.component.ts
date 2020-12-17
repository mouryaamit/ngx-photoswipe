import { Component, OnInit } from '@angular/core';

import { Image } from 'ngx-photoswipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Photoswipe by Amit';

  images: Image[];

  ngOnInit(): void {
    this.images = [
      {
        img:
          'https://trulyholiday.zen3.co.uk/740x494/Images28_b23e819e25.jpg',
        thumb:
          'https://trulyholiday.zen3.co.uk/740x494/Images28_b23e819e25.jpg',
        description: 'Breakfree Adelaide',
        className: 'img-main'
      },
      {
        img:
          'https://trulyholiday.zen3.co.uk/740x494/114585a_hb_a_002_c5e8cd56f1_e0b56b2d24.jpg',
        thumb:
          'https://trulyholiday.zen3.co.uk/290x210/114585a_hb_a_002_c5e8cd56f1_e0b56b2d24.jpg',
        description: 'Breakfree Adelaide'
      },
      {
        img:
          'https://trulyholiday.zen3.co.uk/740x494/091282a_hb_a_013_e4348cca24_86849b584c.jpg',
        thumb:
          'https://trulyholiday.zen3.co.uk/290x210/091282a_hb_a_013_e4348cca24_86849b584c.jpg',
        description: 'Breakfree Adelaide'
      },
      {
        img:
          'https://trulyholiday.zen3.co.uk/740x494/Adina_Serviced_Apartments_Canberra_James_Court_Exterior_8593859de7_cf7591a061.jpg',
        thumb:
          'https://trulyholiday.zen3.co.uk/290x210/Adina_Serviced_Apartments_Canberra_James_Court_Exterior_8593859de7_cf7591a061.jpg',
        description: 'Breakfree Adelaide'
      },
      {
        img:
          'https://trulyholiday.zen3.co.uk/740x494/Adina_Apartment_Hotel_Bondi_Beach_Exterior_3b5d39f898_a1abce4ad4.jpg',
        thumb:
          'https://trulyholiday.zen3.co.uk/290x210/Adina_Apartment_Hotel_Bondi_Beach_Exterior_3b5d39f898_a1abce4ad4.jpg',
        description: 'Breakfree Adelaide'
      },
      {
        img:
          'https://trulyholiday.zen3.co.uk/740x494/114585a_hb_a_005_867953f9b1_87e6c51677.jpg',
        thumb:
          'https://trulyholiday.zen3.co.uk/290x210/114585a_hb_a_005_867953f9b1_87e6c51677.jpg',
        description: 'Breakfree Adelaide'
      },
      {
        img:
          'https://trulyholiday.zen3.co.uk/740x494/114585a_hb_a_002_c5e8cd56f1_e0b56b2d24.jpg',
        thumb:
          'https://trulyholiday.zen3.co.uk/290x210/114585a_hb_a_002_c5e8cd56f1_e0b56b2d24.jpg',
        description: 'Breakfree Adelaide'
      },
      {
        img:
          'https://trulyholiday.zen3.co.uk/740x494/091282a_hb_a_013_e4348cca24_86849b584c.jpg',
        thumb:
          'https://trulyholiday.zen3.co.uk/290x210/091282a_hb_a_013_e4348cca24_86849b584c.jpg',
        description: 'Breakfree Adelaide'
      },
      {
        img:
          'https://trulyholiday.zen3.co.uk/740x494/Adina_Serviced_Apartments_Canberra_James_Court_Exterior_8593859de7_cf7591a061.jpg',
        thumb:
          'https://trulyholiday.zen3.co.uk/290x210/Adina_Serviced_Apartments_Canberra_James_Court_Exterior_8593859de7_cf7591a061.jpg',
        description: 'Breakfree Adelaide'
      },
      {
        img:
          'https://trulyholiday.zen3.co.uk/740x494/Adina_Apartment_Hotel_Bondi_Beach_Exterior_3b5d39f898_a1abce4ad4.jpg',
        thumb:
          'https://trulyholiday.zen3.co.uk/290x210/Adina_Apartment_Hotel_Bondi_Beach_Exterior_3b5d39f898_a1abce4ad4.jpg',
        description: 'Breakfree Adelaide'
      },
      {
        img:
          'https://trulyholiday.zen3.co.uk/740x494/114585a_hb_a_005_867953f9b1_87e6c51677.jpg',
        thumb:
          'https://trulyholiday.zen3.co.uk/290x210/114585a_hb_a_005_867953f9b1_87e6c51677.jpg',
        description: 'Breakfree Adelaide'
      },
      {
        img:
          'https://trulyholiday.zen3.co.uk/740x494/114585a_hb_a_002_c5e8cd56f1_e0b56b2d24.jpg',
        thumb:
          'https://trulyholiday.zen3.co.uk/290x210/114585a_hb_a_002_c5e8cd56f1_e0b56b2d24.jpg',
        description: 'Breakfree Adelaide'
      },
      {
        img:
          'https://trulyholiday.zen3.co.uk/740x494/091282a_hb_a_013_e4348cca24_86849b584c.jpg',
        thumb:
          'https://trulyholiday.zen3.co.uk/290x210/091282a_hb_a_013_e4348cca24_86849b584c.jpg',
        description: 'Breakfree Adelaide'
      },
      {
        img:
          'https://trulyholiday.zen3.co.uk/740x494/Adina_Serviced_Apartments_Canberra_James_Court_Exterior_8593859de7_cf7591a061.jpg',
        thumb:
          'https://trulyholiday.zen3.co.uk/290x210/Adina_Serviced_Apartments_Canberra_James_Court_Exterior_8593859de7_cf7591a061.jpg',
        description: 'Breakfree Adelaide'
      },
      {
        img:
          'https://trulyholiday.zen3.co.uk/740x494/Adina_Apartment_Hotel_Bondi_Beach_Exterior_3b5d39f898_a1abce4ad4.jpg',
        thumb:
          'https://trulyholiday.zen3.co.uk/290x210/Adina_Apartment_Hotel_Bondi_Beach_Exterior_3b5d39f898_a1abce4ad4.jpg',
        description: 'Breakfree Adelaide'
      },
      {
        img:
          'https://trulyholiday.zen3.co.uk/740x494/114585a_hb_a_005_867953f9b1_87e6c51677.jpg',
        thumb:
          'https://trulyholiday.zen3.co.uk/290x210/114585a_hb_a_005_867953f9b1_87e6c51677.jpg',
        description: 'Breakfree Adelaide'
      }
    ];
  }
}
