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
  slideInOutLeft,
  slideInOutRight,
  slideInOutLeftTop,
  slideInOutRightTop,
  slideInFromBottom,
  slideInFromBottomTwo,
  slideInFromBottomThree,
  fromBackground,
} from '../../app/shared/animation';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    slideInOutLeft,
    slideInOutRight,
    slideInOutLeftTop,
    slideInOutRightTop,
    slideInFromBottom,
    slideInFromBottomTwo,
    slideInFromBottomThree,
    fromBackground,
  ],
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  slideInLeft = 'out';
  slideInRight = 'out';
  slideInLeftTop = 'out';
  slideInRightTop = 'out';
  slideInBottom: string = 'out';
  slideInFromBottomTwo: string = 'out';
  slideInFromBottomThree: string = 'out';
  fromBackground: string = 'out';
  private subscription: Subscription | undefined;

  constructor(
    private el: ElementRef,
    private viewportService: ViewportService,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService,
    private router: Router
  ) {}

  ngAfterViewInit() {
    this.subscription = this.viewportService
      .observeElement(this.el.nativeElement)
      .subscribe((isIntersecting) => {
        this.slideInRight = isIntersecting ? 'in' : 'out';
        this.slideInLeft = isIntersecting ? 'in' : 'out';
        this.slideInRightTop = isIntersecting ? 'in' : 'out';
        this.slideInLeftTop = isIntersecting ? 'in' : 'out';
        this.slideInBottom = isIntersecting ? 'in' : 'out';
        this.slideInFromBottomTwo = isIntersecting ? 'in' : 'out';
        this.slideInFromBottomThree = isIntersecting ? 'in' : 'out';
        this.fromBackground = isIntersecting ? 'in' : 'out';
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateToAboutMe(event: Event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Links
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        const element = document.getElementById('aboutMe');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 6);
    });
  }

  navigateToMySkills(event: Event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Links
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        const element = document.getElementById('mySkills');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 12);
    });
  }

  navigateToPortfolio(event: Event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Links
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        const element = document.getElementById('portfolio');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 18);
    });
  }
}
