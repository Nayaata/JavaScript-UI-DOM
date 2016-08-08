/**
 * Created by Naiya on 8/5/2015.
 */
function solve(){
    return function(){
        $.fn.listview = function(data){
            var $this = $(this),
                templateSelector = '#' + $this.attr('data-template'),
                templateHtml = $(templateSelector).html(),
                template = handlebars.compile(templateHtml),
                i;

            for (i = 0; i < data.length; i++) {
                $this.append(template(data[i]));
            }

            return this;
        };
    };
}