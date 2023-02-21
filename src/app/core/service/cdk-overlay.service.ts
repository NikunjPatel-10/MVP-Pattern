import { ComponentType, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';

@Injectable()

export class CdkOverlayService {
  public overlayRef!: OverlayRef;
  constructor(private overlay: Overlay) {
  }

  displayOverlay<T>(component: ComponentType<T>) {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy:this.overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically()
    })

    const portal = new ComponentPortal(component);
    const componentRef = this.overlayRef.attach(portal);

    this.overlayRef.backdropClick().subscribe(()=>{ this.overlayRef.detach()
    })
    return componentRef;
  }
}
