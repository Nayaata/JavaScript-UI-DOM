/**
 * Created by Naiya on 8/5/2015.
 */
function solve() {
    return function ( selector ) {
        var i,
            len,
            children,
            currentChild,
            content;

        if ( arguments.length === 0 ) {
            throw new Error();
        }

        if ( selector === undefined || selector === null ) {
            throw new Error();
        }

        if ( typeof selector !== 'string' && !( selector instanceof HTMLElement ) ) {
            throw new Error();
        }

        var element = document.getElementById( selector );

        if ( element === null ) {
            throw new Error();
        }

        children = element.childNodes;
        len = children.length;

        for ( i = 0; i < len; i += 1 ) {
            currentChild = children[i];

            if ( currentChild.className === 'button' ) {
                currentChild.innerHTML = 'hide';
            }
        }

        element.addEventListener( 'click', function ( ev ) {
            var clickedButton,
                nextElement;

            if ( ev.target.className !== 'button' ) {
                return;
            }

            clickedButton = ev.target;
            nextElement = clickedButton.nextElementSibling;

            if ( nextElement.className === 'content' ) {
                content = nextElement;

                while ( nextElement ) {
                    if ( nextElement.className === 'button' ) {

                        if ( content.style.display === 'none' ) {
                            content.style.display = '';
                            clickedButton.innerHTML = 'hide';
                        } else {
                            content.style.display = 'none';
                            clickedButton.innerHTML = 'show';
                        }

                        break;
                    }

                    nextElement = nextElement.nextElementSibling;
                }
            }

        }, false );
    };
};

module.exports = solve;