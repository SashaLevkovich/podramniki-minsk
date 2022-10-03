const menu = document.querySelector( '.menu' );
const burger = document.querySelector( '.header__burger' );

burger.addEventListener( 'click', () => {
    if ( menu.classList.contains( 'open' ) ) {
        menu.classList.remove( 'open' );
        document.body.style.overflow = 'visible';

        burger.classList.remove( 'close' );
    } else {
        menu.classList.add( 'open' );
        document.body.style.overflow = 'hidden';
        burger.classList.add( 'close' );
    }
} );