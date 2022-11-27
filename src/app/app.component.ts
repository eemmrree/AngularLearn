import { Component } from '@angular/core';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularLearn';
  heroes: SuperHero[] = [];


  constructor(private superHeroService: SuperHeroService){}

  ngOnInit() : void{
    this.superHeroService.getSuperHeroes().subscribe({
      next: (result : SuperHero[]) => this.heroes = result,
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  });
  }
}
