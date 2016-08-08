/**
 * Created by Naiya on 8/5/2015.
 */
function solve(){
    return function (selector) {
        var 	buttons,
            content,
            next;

        if(typeof selector !='string'||$(selector).length==0){
            throw new Error("The given parameter is not a valid parameter");
        }

        buttons = $(selector).find('.button');
        content = $(selector).find('.content');

        buttons.text('hide').click(function(){
            next = $(this).next();
            while (next.hasClass('button')) {
                next = next.next();
            }

            if (next.css('display') =='none') {
                $(this).text('hide');
                next.css('display','');
            }
            else {
                $(this).text('show');
                next.css('display',"none");
            }
        });
    };
};