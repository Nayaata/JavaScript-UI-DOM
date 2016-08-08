/**
 * Created by Naiya on 8/5/2015.
 */
function solve() {
    return function (selector, count) {
        var	index;

        if (count<1||count%1!=0) {
            throw new Error('Count should be a positive number');
        }

        $(selector).prepend('<ul class="items-list"></ul>');

        for (index=0;index<count;index+=1) {
            $("<li class='list-item'>List item #"+index+"</li>").appendTo('.items-list');
        }
    };
};