/* global angular */

(function () {
  angular.module('superheroApp', [])
  .controller ('SuperheroController', [SuperheroController])
    function SuperheroController () {
      this.superheroes = [
        {name: 'name1', phone_number: '111-111-1111', comics_affiliation: 'marvel', image_url: 'http://images5.fanpop.com/image/photos/29500000/GamesRadar-Puppy-puppies-29566786-200-200.jpg', selected: false},
        {name: 'name2', phone_number: '222-222-2222', comics_affiliation: 'dc', image_url: 'http://www.animal-photography.com/thumbs/3_rough_collie_puppies_sitting_together~AP-BDTEU4-TH.jpg', selected: false},
        {name: 'name3', phone_number: '333-333-3333', comics_affiliation: 'marvel', image_url: 'http://adogbreeds.com/wp-content/uploads/2012/12/Pembroke-Welsh-Corgi-Puppies-Lying-Down-200x200.jpg', selected: false},
        {name: 'name4', phone_number: '444-444-4444', comics_affiliation: 'dc', image_url: 'http://fourmuddypaws.com/wp-content/uploads/2014/05/bulldog-puppies-playing-e1401294368290.jpg', selected: false}
      ]
      this.selectHero = function (hero) {
          // hero.selected = !hero.selected
          this.selectedHero = hero
      }
    }

})()
