/* globals $ */

//function solve() {
  $.fn.gallery = function (coloumns = 4) {
    var gallery = this;
    gallery.addClass('gallery');

    var selected = $('.gallery .selected');
    selected.hide();

    var imgList = $('.image-container');

    for (var i = coloumns, len = imgList.length; i < len; i += coloumns) {
        var clearImg = $(imgList.eq(i));
        clearImg.addClass('clearfix');
    }

    var galleryList = $('.gallery-list').eq(0);
    var previousImg = $('#previous-image');
    var currentImg =$('#current-image');
    var nextImg = $('#next-image');

    var countImgs = imgList.length;
    

    galleryList.on('click', 'img', clickImg);

    




    function clickImg() {
      var clicked = $(this);
      galleryList.addClass('blurred');
      selected.show();
      gallery.append($('<div />').addClass('disabled-background'));
      
      var currDataInfo = clicked.attr('data-info');
      currentImg.attr('src', clicked.attr('src'));
      currentImg.attr('data-info', currDataInfo);
      
      var length = countImgs;

      var prevDataInfo = '';
      if(+currDataInfo === 1){
          prevDataInfo += (length -1);
      }
      else{
        prevDataInfo += (+currDataInfo -1);
      }

      var nextDataInfo = '';
      if(+currDataInfo === length){
        nextDataInfo += 1;
      }
      else{
        nextDataInfo += (+currDataInfo+1);
      }

      var prevImgSrc = 'imgs/' + prevDataInfo + '.jpg';
      previousImg.attr('src', prevImgSrc);
      previousImg.attr('data-info', prevDataInfo);

      var nextImgSrc = 'imgs/' + nextDataInfo + '.jpg';
      nextImg.attr('src', nextImgSrc);
      nextImg.attr('data-info', nextDataInfo);
      
    }
    

    return this;
  };
//}
//module.exports = solve;