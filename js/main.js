{
    let lastScroll = 0;
    const defaultOffset = 200;
    const header = document.querySelector( '.header' );

    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
    const containHide = () => header.classList.contains( 'hide' );

    window.addEventListener( 'scroll', () => {

        if ( scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset )
            header.classList.add( 'hide' );

        else if ( scrollPosition() < lastScroll && containHide() )
            header.classList.remove( 'hide' );

        lastScroll = scrollPosition();

        if ( lastScroll > 300 )
            header.classList.add( 'fix' );
        else if ( lastScroll < 300 )
            header.classList.remove( 'fix' );

    } );
}

{
    const anchors = document.querySelectorAll( 'a[href*="#"]' );

    for ( let anchor of anchors ) {
        anchor.addEventListener( 'click', function ( e ) {
            e.preventDefault();

            const blockID = anchor.getAttribute( 'href' ).substr( 1 );

            document.getElementById( blockID ).scrollIntoView( {
                behavior: 'smooth',
                block: 'start',
            } );
        } );
    }

}
