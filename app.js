/* global angular */

(function () {
  angular.module('superheroApp', [])
  .controller ('SuperheroController', [SuperheroController])
    function SuperheroController () {
      this.superheroes = [
        {name: 'Batman', phone_number: '111-111-1111', comics_affiliation: 'dc', image_url: 'http://i.imgur.com/kFD5apF.png', selected: false},
        {name: 'Hulk', phone_number: '222-222-2222', comics_affiliation: 'marvel', image_url: 'http://i.imgur.com/X6sh5Jx.png', selected: false},
        {name: 'Spider-Man', phone_number: '333-333-3333', comics_affiliation: 'marvel', image_url: 'http://i.imgur.com/bGByRfb.png', selected: false},
        {name: 'Wonder Woman', phone_number: '444-444-4444', comics_affiliation: 'dc', image_url: 'http://i.imgur.com/ckMqnxq.png', selected: false},
        {name: 'Aquaman', phone_number: '555-555-5555', comics_affiliation: 'dc', image_url: 'http://i.imgur.com/fEjVJkp.png', selected: false},
        {name: 'Superman', phone_number: '666-666-6666', comics_affiliation: 'dc', image_url: 'http://i.imgur.com/eRHtrCy.png', selected: false}
      ]
      this.selectHero = function (hero) {
          // hero.selected = !hero.selected
          this.selectedHero = hero
      }
    }

})()
