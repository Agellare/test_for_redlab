

$(document).ready(function(){


function getURLParameter(name) {
  return decodeURIComponent((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1] || '');
}
var p_lang = getURLParameter('p_lang');
var p_view = getURLParameter('p_view');
var p_sort = getURLParameter('p_sort');
var p_asc = getURLParameter('p_asc');
$('body').addClass(p_lang);





  var db;
  $.getJSON('data.json', function(data) {
    db = data;
    $(document).trigger('dbLoaded');
  });
  $(document).on('dbLoaded', function() {
    uploaddata();
  });


  function funcIsotop(){
    $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        getSortData: {
          id: '.item-id parseInt',
          name: '.item-name',
          age: '.item-age parseInt'
        }
      });
  };    


  

  function uploaddata(){

      $('.grid .grid-item').remove();
      funcIsotop();

          if ( $('body').hasClass('eng') ){
            for(var i=0;i<db.length;i++){




                if ( db[i].video != null ) {
                  var $items = $('<div class="grid-item grid-item--width2"> <div class="item fadeInUp wow"> <div class="item-inf"> <div class="item-id">' + db[i].id + '</div> <div class="item-ava"><img src="img/' + db[i].image + '.svg" alt=""></div>' +
                  '<div class="item-name">' + db[i].name.en + '</div>                <div class="item-age">' + db[i].age + ' <span>years</span></div>                <div class="item-phone"><a href="tel:' + db[i].phone + '">' + db[i].phone + '</a></div>                <div class="item-text">' + db[i].phrase.en + '</div>                <div class="item-star"></div>              </div>    <div class="item-video"> <video width="100%" height="100%" controls preload="metadata" loading="lazy"> <source src="video/' + db[i].video + '.mp4" type="video/mp4;"> </video> </div>        </div>          </div>'                );
                  $('.grid').append( $items ).isotope( 'appended', $items );
                }
                else {
                  var $items = $('<div class="grid-item"> <div class="item fadeInUp wow"> <div class="item-inf"> <div class="item-id">' + db[i].id + '</div> <div class="item-ava"><img src="img/' + db[i].image + '.svg" alt=""></div>' +
                    '<div class="item-name">' + db[i].name.en + '</div>                <div class="item-age">' + db[i].age + ' <span>years</span></div>                <div class="item-phone"><a href="tel:' + db[i].phone + '">' + db[i].phone + '</a></div>                <div class="item-text">' + db[i].phrase.en + '</div>                <div class="item-star"></div>              </div>            </div>          </div>'                );
                  $('.grid').append( $items ).isotope( 'appended', $items );
                }

            } 
          }
          else {
            for(var i=0;i<db.length;i++){




                if ( db[i].video != null ) {
                  var $items = $('<div class="grid-item grid-item--width2"> <div class="item fadeInUp wow"> <div class="item-inf"> <div class="item-id">' + db[i].id + '</div> <div class="item-ava"><img src="img/' + db[i].image + '.svg" alt=""></div>' +
                  '<div class="item-name">' + db[i].name.ru + '</div>                <div class="item-age">' + db[i].age + ' <span>лет</span></div>                <div class="item-phone"><a href="tel:' + db[i].phone + '">' + db[i].phone + '</a></div>                <div class="item-text">' + db[i].phrase.ru + '</div>                <div class="item-star"></div>              </div>    <div class="item-video"> <video width="100%" height="100%" controls preload="metadata" loading="lazy"> <source src="video/' + db[i].video + '.mp4" type="video/mp4;"> </video> </div>        </div>          </div>'                );
                  $('.grid').append( $items ).isotope( 'appended', $items );
                }
                else {
                  var $items = $('<div class="grid-item"> <div class="item fadeInUp wow"> <div class="item-inf"> <div class="item-id">' + db[i].id + '</div> <div class="item-ava"><img src="img/' + db[i].image + '.svg" alt=""></div>' +
                    '<div class="item-name">' + db[i].name.ru + '</div>                <div class="item-age">' + db[i].age + ' <span>лет</span></div>                <div class="item-phone"><a href="tel:' + db[i].phone + '">' + db[i].phone + '</a></div>                <div class="item-text">' + db[i].phrase.ru + '</div>                <div class="item-star"></div>              </div>            </div>          </div>'                );
                  $('.grid').append( $items ).isotope( 'appended', $items );
                }

            }          
          }

          new WOW().init();

          funcIsotop();
  };



  var arr = new Map([
    ['sorting-ru', 'Сортировка'],
    ['sorting-eng', 'Sorting'],
    ['view-ru', 'Вид'],
    ['view-eng', 'View'],
    ['name-ru', 'Имя'],
    ['name-eng', 'Name'],
    ['age-ru', 'Возраст'],
    ['age-eng', 'Age'],
    ['asc-ru', 'По возростанию'],
    ['asc-eng', 'Ascending'],
    ['desc-ru', 'По убыванию'],
    ['desc-eng', 'Descending'],
    ['view-table-ru', 'Таблица'],
    ['view-table-eng', 'Table'],
    ['view-preview-ru', 'Превью'],
    ['view-preview-eng', 'Preview'],
    ['search-ru', 'Поиск'],
    ['search-eng', 'Search'],
    ['abort-ru', 'Сброс'],
    ['abort-eng', 'Abort']
  ]); 

  function funclangru(){
    $('.lang-ru').addClass('active');
    $('.lang-eng').removeClass('active');
    $('body').addClass('ru');
    $('body').removeClass('eng');

    $('.top-left h2').text( arr.get('sorting-ru') );
    $('.top-right h2').text( arr.get('view-ru') );
    $('.sort-name').text( arr.get('name-ru') );
    $('.sort-age').text( arr.get('age-ru') );
    $('.sort-asc').text( arr.get('asc-ru') );
    $('.sort-desc').text( arr.get('desc-ru') );
    $('.view-table').text( arr.get('view-table-ru') );
    $('.view-preview').text( arr.get('view-preview-ru') );
    $('.btn-search').text( arr.get('search-ru') );
    $('.btn-abort').text( arr.get('abort-ru') );


    $('.sort-id').addClass('active');
    $('.sort-name').removeClass('active');
    $('.sort-age').removeClass('active');
    $('.sort-asc').addClass('active');
    $('.sort-desc').removeClass('active');

    uploaddata();
  };

  $('.lang-ru').click(function(){
    funclangru();
  });



  function funclangeng(){
    $('.lang-eng').addClass('active');
    $('.lang-ru').removeClass('active');
    $('body').addClass('eng');
    $('body').removeClass('ru');

    $('.top-left h2').text( arr.get('sorting-eng') );
    $('.top-right h2').text( arr.get('view-eng') );
    $('.sort-name').text( arr.get('name-eng') );
    $('.sort-age').text( arr.get('age-eng') );
    $('.sort-asc').text( arr.get('asc-eng') );
    $('.sort-desc').text( arr.get('desc-eng') );
    $('.view-table').text( arr.get('view-table-eng') );
    $('.view-preview').text( arr.get('view-preview-eng') );
    $('.btn-search').text( arr.get('search-eng') );
    $('.btn-abort').text( arr.get('abort-eng') );


    $('.sort-id').addClass('active');
    $('.sort-name').removeClass('active');
    $('.sort-age').removeClass('active');
    $('.sort-asc').addClass('active');
    $('.sort-desc').removeClass('active');

    uploaddata();

  };

  $('.lang-eng').click(function(){
    funclangeng();
  });


  function funcviewtable(){
    $('.view-table').addClass('active');
    $('.view-preview').removeClass('active');
    $('.cont').addClass('cont-table');
    $('.cont').removeClass('cont-preview');
    funcIsotop();
    if ($('.wow').hasClass('animated')) {
            $(this).removeClass('animated');
            $(this).removeAttr('style');
            new WOW().init();
    }
  };

  $('.view-table').click(function(){
    funcviewtable();
  });

  function funcviewpreview(){
    $('.view-preview').addClass('active');
    $('.view-table').removeClass('active');
    $('.cont').removeClass('cont-table');
    $('.cont').addClass('cont-preview');
    funcIsotop();
    if ($('.wow').hasClass('animated')) {
            $(this).removeClass('animated');
            $(this).removeAttr('style');
            new WOW().init();
    }
  };

  $('.view-preview').click(function(){
    funcviewpreview();
  });





  function funcsortid(){
    $('.sort-id').addClass('active');
    $('.sort-name').removeClass('active');
    $('.sort-age').removeClass('active');
  };
  $('.sort-id').click(function(){
    funcsortid();
  });
  function funcsortname(){
    $('.sort-name').addClass('active');
    $('.sort-id').removeClass('active');
    $('.sort-age').removeClass('active');
  };
  $('.sort-name').click(function(){
    funcsortname();
  });
  function funcsortage(){
    $('.sort-age').addClass('active');
    $('.sort-name').removeClass('active');
    $('.sort-id').removeClass('active');
  };
  $('.sort-age').click(function(){
    funcsortage();
  });


  $('.sort-type').on( 'click', 'div', function() {
    var sortValue = $(this).attr('data-sort-value');
    if ( $('.sort-desc').hasClass('active') ) {
      $('.grid').isotope({ sortBy: sortValue, sortAscending: false });
      new WOW().init();
    }
    else {
      $('.grid').isotope({ sortBy: sortValue, sortAscending: true });
      new WOW().init();
    }
  });





  function funcsortasc(){
    $('.sort-asc').addClass('active');
    $('.sort-desc').removeClass('active');
    var sortValue = $('.sort-type').find('.active').attr('data-sort-value');
    $('.grid').isotope({ sortBy: sortValue, sortAscending: true });
  };

  $('.sort-asc').click(function(){
    funcsortasc();
  });

  function funcsortdesc(){
    $('.sort-desc').addClass('active');
    $('.sort-asc').removeClass('active');
    var sortValue = $('.sort-type').find('.active').attr('data-sort-value');
    $('.grid').isotope({ sortBy: sortValue, sortAscending: false });
  };
  $('.sort-desc').click(function(){
    funcsortdesc();
  });





$(function() {
  
  var $video = $('video');
  var $window = $(window);

  $window.scroll(function() {

    $('video').each(function(){

      var $topOfVideo = $(this).offset().top;
      var $bottomOfVideo = $(this).offset().top + $(this).outerHeight();

      var $topOfScreen = $window.scrollTop();
      var $bottomOfScreen = $window.scrollTop() + $window.innerHeight();
      
      if(($bottomOfScreen > $bottomOfVideo + 100) && ($topOfScreen + 100 < $topOfVideo)){
        $(this)[0].play();
      } else {
        $(this)[0].pause();
      }

    })
    
  });
  
});




  $('.content').on( 'click', '.item-star', function() {
    $(this).toggleClass('active');
  });

  










$('.search').on( 'click', '.btn-search', function(){
  var text = $('.inp-search').val();
  $('.grid').isotope({ filter: function() {
    var name = $(this).find('.item-name').text();
    return name.match( text );
  } })
});


$('.search').on( 'click', '.btn-abort', function(){
  filterValue = '*';
  $('.grid').isotope({ filter: filterValue });
});










  $(window).on("load", function() {

    if ( (p_lang == '') && (p_view == '') && (p_sort == '') && (p_asc == '') ){
      return false;
    }
    else {
      

      setTimeout(function(){
          if ( p_lang == "eng" ){
            funclangeng();  
          }
          else {
            funclangru();
          };
          if ( p_view == "preview" ){
            funcviewpreview();
          }
          else {
            funcviewtable();
          };

        var sortValue = p_sort;

        if ( p_sort == "id" ){
          funcsortid();  
        }
        if ( p_sort == "name" ){
          funcsortname();  
        }
        if ( p_sort == "age" ){
          funcsortage();  
        };



        if ( p_asc == "desc" ) {
          funcsortdesc();
        }
        else {
          funcsortasc();
        }


        if ($('.wow').hasClass('animated')) {
                $(this).removeClass('animated');
                $(this).removeAttr('style');
                new WOW().init();
        }
        new WOW().init();


      }, 10);

    }



  });




});




