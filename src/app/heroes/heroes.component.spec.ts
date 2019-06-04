import { HeroesComponent } from "./heroes.component";
import { of } from "rxjs";

describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;

    beforeEach( () => {
        HEROES= [
            {id: 1, name:"aaa", strength: 8},
            {id: 2, name:"bbb", strength: 24},
            {id: 3, name:"ccc", strength: 55},
        ];

        mockHeroService = jasmine.createSpyObj(['getHeroes','addHero','deleteHero','subscribe']);

        component = new HeroesComponent(mockHeroService);
    })

    describe('delete', () => {

        it('should remove the indicated hero from the heroes list', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(component.heroes.length).toBe(2);
        })

        it('should call deleteHero', () =>{
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
        })

    })
})