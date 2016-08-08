/* globals $ */

//function solve() {
  $.fn.gallery = function (columns = 4) {
    // your solution here
    var $gallery = $("#gallery"); //this
    $gallery.addClass("gallery");

    var $selected = $(".gallery .selected");
    $selected.hide();

  //var $imageContainerList = $(".image-container");
  var $imgList = $(".image-container");
  var $countImgs = $imgList.length;

    for (var index = columns; index < $countImgs; index += columns) {
        var $clearImg = $($imgList.eq(index));
        $clearImg.addClass(".clearfix"); 
    }

  var $galleryList = $(".gallery-list").eq(0); //.eq() взима на конкретен индекс
  var $previousImg = $("#previous-image");
  var $currentImg = $("#current-image");
  var $nextImg = $("#next-image");


    $galleryList.on( "click", "img", clickImg);
      //debugger;
    function clickImg() {
      //debugger;
      var $clicked = $(this);
      $galleryList.addClass("blurred");
      $selected.show();

      $gallery.append($('<div />').addClass('disabled-background'));

      var currDataInfo = $clicked.attr('data-info');
      $currentImg.attr('src', $clicked.attr('src'));    
      $currentImg.attr('data-info', currDataInfo);

      var length = $countImgs; //$galleryList.length;

      var prevDataInfo = '';
      if (+currDataInfo === 1) {
        prevDataInfo += (length - 1);
      } else {
        prevDataInfo += (+currDataInfo - 1);
      }

      var nextDataInfo = '';
      if (+currDataInfo === length) {
        nextDataInfo += 1;
      } else {
        nextDataInfo += (+currDataInfo + 1);
      }

      var prevImgSrc = 'imgs/' + prevDataInfo + '.jpg';
      $previousImg.attr('src', prevImgSrc);
      $previousImg.attr('data-info', prevDataInfo);

      var nextImgSrc = 'imgs/' + nextDataInfo + '.jpg';
      $nextImg.attr('src', nextImgSrc);
      $nextImg.attr('data-info', nextDataInfo);

    }

    return this;
  };
//}
//module.exports = solve;