import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LightboxAdapter, NgxPhotoswipeModule } from 'ngx-photoswipe';

@Injectable()
export class CustomLightboxAdapter extends LightboxAdapter {
  fullscreenEl = false;
  zoomEl = false;
  maxSpreadZoom = 1;
  pinchToClose = false;
  getDoubleTapZoom = (isMouseClick, item) => {
    return item.initialZoomLevel;
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxPhotoswipeModule],
  providers: [
    { provide: LightboxAdapter, useClass: CustomLightboxAdapter }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


