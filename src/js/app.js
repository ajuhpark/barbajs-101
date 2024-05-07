import barba from '@barba/core';

import barbaCss from '@barba/css';
barba.use(barbaCss);


// //this hook will run before any transition
// barba.hooks.before((data) => {

//     // trying to get the body background from being the flash of white.
//     // I set a background attribute to the body in webflow
//     const background = data.current.container.dataset.background;
//     // below is setting the --body-background variable in my webflow homepage
//     // to the background color from the barba data site.
//     // some color info
//     // I put #45B565 - green as data-background for cs page to test
//     // I put #4579B5 - blue as data-background for homepage to test
//     // #f7f7f2 is light beige. #f7dcdc is light pink.
//     body.style.setProperty('--page-background', background);
  
//   });


barba.init({
    transitions: [
      {
        //setting transition name to home.
        name: 'home',
          // creating a hook
          beforeOnce(){
            console.log('running hook beforeOnce')
          },
          // this is a hook that's called once. It happens once on the page load.
          once(){
            // with css plugin, this won't work.
            console.log('running hook once')
          },
          // another hook
          afterOnce(){
            console.log('running hook afterOnce')
          },
      }, 
      {
        name: 'fade',
          // we're going to the 'fade' namespace, the one that's the 
          // namespace for the container in homepage.
          to:{
            namespace: ['fade']
          },
          // when you leave the page, the fade class will be added to 
          // the container of current page
          leave() {},
          enter() {} 
      },
      {
        name: 'clip',
          // we're going to the 'clip' namespace, the one that's the 
          // namespace for the container in homepage.
          // clip-path animation, we have to put in sync: true.
          sync: true, 
          // we're going to the 'clip' namespace, the one that's the 
          // namespace for the container in homepage.
          to:{
            namespace: ['clip']
          },
          // when you leave the page, the clip class will be added to 
          // the container of current page
          leave() {},
          enter() {},
          beforeEnter(){
            console.log('before enter')
          }   
      },
      {
        name: 'with-cover',
        to: {
          namespace: ['with-cover']
        },
        leave() {},
        enter() {}
      }
    ]
  })