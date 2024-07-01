import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ViewportService } from '../../app/shared/viewport-service.service';
import {
  slideInOutLeftBottom,
  slideInOutRightTop,
  slideInFromBottom,
  fromBackground,
  slideInOutTop,
} from '../../app/shared/animation';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
  animations: [
    slideInOutLeftBottom,
    slideInOutRightTop,
    slideInFromBottom,
    fromBackground,
    slideInOutTop
  ],
})
export class MySkillsComponent implements AfterViewInit, OnDestroy {
  slideIn = 'out';
  slideInRightTop = 'out';
  slideInOutLeftBottom = 'out';
  slideInBottom: string = 'out';
  fromBackground: string = 'out';
  slideInTop: string = 'out';
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
        this.slideInRightTop = isIntersecting ? 'in' : 'out';
        this.slideInOutLeftBottom = isIntersecting ? 'in' : 'out';
        this.slideInBottom = isIntersecting ? 'in' : 'out';
        this.fromBackground = isIntersecting ? 'in' : 'out';
        this.slideInTop = isIntersecting ? 'in' : 'out';
        this.cdr.detectChanges();
      });
  } 

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
