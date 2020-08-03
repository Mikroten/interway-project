document.addEventListener('DOMContentLoaded', () => {
    //Variables
    const stickyNavBoxes = document.getElementsByClassName('sticky-box');
    const sectionBlocks = document.getElementsByTagName('section');
    const stickyNav = document.getElementsByClassName('sticky-nav')[0];
    const marginOffset = 30;
    
    /*
    Function that activates correct box in sticky 
    navigation and adds id parameter to url
    */
    const activateNavBox = (index) => {
        stickyNav.classList.remove('hide');

        for(el of stickyNavBoxes){
            el.classList.remove('active')
        }

        switch(index) {
            case 0:
                stickyNavBoxes[0].classList.add('active')
                history.pushState(null, null, '#we');
                break;
            case 1:
                stickyNavBoxes[1].classList.add('active') 
                history.pushState(null, null, '#bj');
              break;
            case 2:
                stickyNavBoxes[2].classList.add('active') 
                history.pushState(null, null, '#et');
                break;
            default:
                stickyNav.classList.add('hide');
                history.pushState(null, null, '#');
        }
    }
    
    /*
    Event listener for scroll which checks on which section is user 
    currently and fires activateNavBox() function with an index of section
    */
    window.addEventListener('scroll', () => {
        if(sectionBlocks[0].offsetTop <= window.scrollY && sectionBlocks[1].offsetTop >= window.scrollY + 30){
            activateNavBox(0);
        }else if(sectionBlocks[1].offsetTop <= window.scrollY && sectionBlocks[2].offsetTop >= window.scrollY + 30){
            activateNavBox(1);
        }else if( sectionBlocks[2].offsetTop <= window.scrollY + 30){
            activateNavBox(2);
        }else if(sectionBlocks[0].offsetTop >= window.scrollY){
            activateNavBox();
        }
    });

    /*
    Event listeners for navigation links on when it's clicked 
    smooth scrolls to them and adds id parameter to url
    */
    document.querySelectorAll('.scroll-we').forEach(el => {
        el.addEventListener('click', event => {
            event.preventDefault();
            document.querySelector('#we').scrollIntoView({ 
                behavior: 'smooth' 
            });
            history.pushState(null, null, '#we');
        })
    })

    document.querySelectorAll('.scroll-bj').forEach(el => {
        el.addEventListener('click', event => {
            event.preventDefault();
            document.querySelector('#bj').scrollIntoView({ 
                behavior: 'smooth' 
            });
            history.pushState(null, null, '#bj');
        })
    })

    document.querySelectorAll('.scroll-et').forEach(el => {
        el.addEventListener('click', event => {
            event.preventDefault();
            document.querySelector('#et').scrollIntoView({ 
                behavior: 'smooth' 
            });
            history.pushState(null, null, '#et');
        })
    })  
})



