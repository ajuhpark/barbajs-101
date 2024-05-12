import barba from '@barba/core';

import barbaCss from '@barba/css';
barba.use(barbaCss);

const body = document.querySelector('body');

// Log to ensure the hook is being set up
console.log('Setting up Barba hooks');

// Hook to run before any transition
barba.hooks.before((data) => {
    console.log('Before transition hook triggered');
    
    // Check if data is available
    console.log('Data:', data);
    
    // Accessing container and dataset
    const currentContainer = data.current.container;
    if (currentContainer) {
        const background = currentContainer.dataset.background;
        console.log('Background:', background);
        
        // Setting body background
        body.style.setProperty('--page-background', background);
    } else {
        console.log('Current container not found.');
    }
});


barba.init({
    transitions: [
      {
        //setting transition name to home.
        name: 'home',
        to: {
          namespace: ['home']
        },
        sync: true, 
        once() {},
        leave() {},
        enter() {}
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