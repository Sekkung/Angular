import { Component ,Inject,OnInit,Renderer2} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Angular-LAB';
  theme:Theme = 'dark-theme';
  constructor (
    @Inject(DOCUMENT) private document:Document,
    private renderer:Renderer2
  ){}
  ngOnInit() {
    this.initializetheme;
  }

  switchTheme(){
    this.document.body.classList.replace(this.theme,
      this.theme === 'dark-theme'
      ? (this.theme = 'light-theme')
      : (this.theme = 'dark-theme')
    )
  }

  initializetheme = ():void=>
    this.renderer.addClass(this.document.body,this.theme);
}
export type Theme = 'light-theme' | 'dark-theme';
