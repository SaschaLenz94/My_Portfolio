import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ViewportService } from '../shared/viewport-service.service';
import {
  slideInOutLeftTop,
  slideInOutRightTop,
  slideInFromBottom,
  fromBackground,
} from '../shared/animation';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TranslateModule,RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  animations: [
    slideInOutLeftTop,
    slideInOutRightTop,
    slideInFromBottom,
    fromBackground,
  ],
})
export class PortfolioComponent implements AfterViewInit, OnDestroy {
  slideIn = 'out';
  slideInRight = 'out';
  slideInLeft = 'out';
  slideInBottom: string = 'out';
  fromBackground: string = 'out';
  slideInOutLeftTop:string='out';
  private subscription: Subscription | undefined;

  constructor(
    private el: ElementRef,
    private viewportService: ViewportService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.subscription = this.viewportService
      .observeElement(this.el.nativeElement)
      .subscribe((isIntersecting) => {
        this.slideIn = isIntersecting ? 'in' : 'out';
        this.slideInRight = isIntersecting ? 'in' : 'out';
        this.slideInLeft = isIntersecting ? 'in' : 'out';
        this.slideInBottom = isIntersecting ? 'in' : 'out';
        this.fromBackground = isIntersecting ? 'in' : 'out';
        this.slideInOutLeftTop = isIntersecting ? 'in' : 'out';
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
