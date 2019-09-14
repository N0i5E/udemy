$(document).ready(function () {
    $('.list-item:first').hover(function () {
        $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').on('click', function () {
        $('.image:even').fadeToggle('fast');
    });

    $('.list-item:eq(4)').on('click', function () {
        $('.image:odd').animate(
            {
            opacity: 'toggle',
            height: 'toggle'
            }, 3000
        );
    }); 
});

// document.querySelectorAll('list-item').forEach();
// .classList
// .addEventListener
// $.ajax - fetch
// animations
/*  Angular
    1. Node JS -> npm
    2. TypeScript
    3. Webpack
    4. MVC (model view controller)
    5. Angular
*/

/*  React
    1. Node JS -> npm
    2. Babel
    3. JSX препроцессор
    4. WEbpack
    5. React
*/

/*  Vue
    1. Node JS -> npm
    2. Babel 
    3. Webpack
    4. Vue
*/
