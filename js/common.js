$(document).ready(function(){



  function uploaddata(){
    $.getJSON('data.json', function(data) {

      $('.grid .grid-item').remove();
      $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        getSortData: {
          id: '.item-id parseInt',
          name: '.item-name',
          age: '.item-age parseInt'
        }
      });

          if ( $('body').hasClass('eng') ){
            for(var i=0;i<data.length;i++){




                if ( data[i].video != null ) {
                  var $items = $('<div class="grid-item grid-item--width2"> <div class="item"> <div class="item-inf"> <div class="item-id">' + data[i].id + '</div> <div class="item-ava"><img src="img/' + data[i].image + '.svg" alt=""></div>' +
                  '<div class="item-name">' + data[i].name.en + '</div>                <div class="item-age">' + data[i].age + ' <span>years</span></div>                <div class="item-phone"><a href="tel:' + data[i].phone + '">' + data[i].phone + '</a></div>                <div class="item-text">' + data[i].phrase.en + '</div>                <div class="item-star"></div>              </div>    <div class="item-video"> <video width="100%" height="100%" controls> <source src="video/' + data[i].video + '.mp4" type="video/mp4;"> </video> </div>        </div>          </div>'                );
                  $('.grid').append( $items ).isotope( 'appended', $items );
                }
                else {
                  var $items = $('<div class="grid-item"> <div class="item"> <div class="item-inf"> <div class="item-id">' + data[i].id + '</div> <div class="item-ava"><img src="img/' + data[i].image + '.svg" alt=""></div>' +
                    '<div class="item-name">' + data[i].name.en + '</div>                <div class="item-age">' + data[i].age + ' <span>years</span></div>                <div class="item-phone"><a href="tel:' + data[i].phone + '">' + data[i].phone + '</a></div>                <div class="item-text">' + data[i].phrase.en + '</div>                <div class="item-star"></div>              </div>            </div>          </div>'                );
                  $('.grid').append( $items ).isotope( 'appended', $items );
                }

            } 
          }
          else {
            for(var i=0;i<data.length;i++){




                if ( data[i].video != null ) {
                  var $items = $('<div class="grid-item grid-item--width2"> <div class="item"> <div class="item-inf"> <div class="item-id">' + data[i].id + '</div> <div class="item-ava"><img src="img/' + data[i].image + '.svg" alt=""></div>' +
                  '<div class="item-name">' + data[i].name.ru + '</div>                <div class="item-age">' + data[i].age + ' <span>лет</span></div>                <div class="item-phone"><a href="tel:' + data[i].phone + '">' + data[i].phone + '</a></div>                <div class="item-text">' + data[i].phrase.ru + '</div>                <div class="item-star"></div>              </div>    <div class="item-video"> <video width="100%" height="100%" controls> <source src="video/' + data[i].video + '.mp4" type="video/mp4;"> </video> </div>        </div>          </div>'                );
                  $('.grid').append( $items ).isotope( 'appended', $items );
                }
                else {
                  var $items = $('<div class="grid-item"> <div class="item"> <div class="item-inf"> <div class="item-id">' + data[i].id + '</div> <div class="item-ava"><img src="img/' + data[i].image + '.svg" alt=""></div>' +
                    '<div class="item-name">' + data[i].name.ru + '</div>                <div class="item-age">' + data[i].age + ' <span>лет</span></div>                <div class="item-phone"><a href="tel:' + data[i].phone + '">' + data[i].phone + '</a></div>                <div class="item-text">' + data[i].phrase.ru + '</div>                <div class="item-star"></div>              </div>            </div>          </div>'                );
                  $('.grid').append( $items ).isotope( 'appended', $items );
                }

            }          
          }
          if ($('.wow').hasClass('animated')) {
            $(this).removeClass('animated');
            $(this).removeAttr('style');
            new WOW().init();
          }

      });



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
  ]); 

  $('.lang-ru').click(function(){
    $(this).addClass('active');
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


    $('.sort-id').addClass('active');
    $('.sort-name').removeClass('active');
    $('.sort-age').removeClass('active');
    $('.sort-asc').addClass('active');
    $('.sort-desc').removeClass('active');

    uploaddata();




  });

  $('.lang-eng').click(function(){
    $(this).addClass('active');
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


    $('.sort-id').addClass('active');
    $('.sort-name').removeClass('active');
    $('.sort-age').removeClass('active');
    $('.sort-asc').addClass('active');
    $('.sort-desc').removeClass('active');

    uploaddata();




  });




  $('.view-table').click(function(){
    $(this).addClass('active');
    $('.view-preview').removeClass('active');
    $('.cont').addClass('cont-table');
    $('.cont').removeClass('cont-preview');
    $('.grid').isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      getSortData: {
        id: '.item-id parseInt',
        name: '.item-name',
        age: '.item-age parseInt'
      }
    });
  });

  $('.view-preview').click(function(){
    $(this).addClass('active');
    $('.view-table').removeClass('active');
    $('.cont').removeClass('cont-table');
    $('.cont').addClass('cont-preview');
    $('.grid').isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      getSortData: {
        id: '.item-id parseInt',
        name: '.item-name',
        age: '.item-age parseInt'
      }
    });
  });





  $('.sort-id').click(function(){
    $(this).addClass('active');
    $('.sort-name').removeClass('active');
    $('.sort-age').removeClass('active');
  });
  $('.sort-name').click(function(){
    $(this).addClass('active');
    $('.sort-id').removeClass('active');
    $('.sort-age').removeClass('active');
  });
  $('.sort-age').click(function(){
    $(this).addClass('active');
    $('.sort-name').removeClass('active');
    $('.sort-id').removeClass('active');
  });


  $('.sort-type').on( 'click', 'div', function() {
    var sortValue = $(this).attr('data-sort-value');
    if ( $('.sort-desc').hasClass('active') ) {
      $('.grid').isotope({ sortBy: sortValue, sortAscending: false });
    }
    else {
      $('.grid').isotope({ sortBy: sortValue, sortAscending: true });
    }
  });





  $('.sort-asc').click(function(){
    $(this).addClass('active');
    $('.sort-desc').removeClass('active');
    var sortValue = $('.sort-type').find('.active').attr('data-sort-value');
    $('.grid').isotope({ sortBy: sortValue, sortAscending: true });
  });

  $('.sort-desc').click(function(){
    $(this).addClass('active');
    $('.sort-asc').removeClass('active');

    var sortValue = $('.sort-type').find('.active').attr('data-sort-value');
    $('.grid').isotope({ sortBy: sortValue, sortAscending: false });
  });



  $(function(){
    $.getJSON('data.json', function(data) {

          if ( $('body').hasClass('eng') ){
            for(var i=0;i<data.length;i++){




                if ( data[i].video != null ) {
                  var $items = $('<div class="grid-item grid-item--width2"> <div class="item"> <div class="item-inf"> <div class="item-id">' + data[i].id + '</div> <div class="item-ava"><img src="img/' + data[i].image + '.svg" alt=""></div>' +
                  '<div class="item-name">' + data[i].name.en + '</div>                <div class="item-age">' + data[i].age + ' <span>years</span></div>                <div class="item-phone"><a href="tel:' + data[i].phone + '">' + data[i].phone + '</a></div>                <div class="item-text">' + data[i].phrase.en + '</div>                <div class="item-star"></div>              </div>    <div class="item-video"> <video width="100%" height="100%" controls> <source src="video/' + data[i].video + '.mp4" type="video/mp4;"> </video> </div>        </div>          </div>'                );
                  $('.grid').append( $items ).isotope( 'appended', $items );
                }
                else {
                  var $items = $('<div class="grid-item"> <div class="item"> <div class="item-inf"> <div class="item-id">' + data[i].id + '</div> <div class="item-ava"><img src="img/' + data[i].image + '.svg" alt=""></div>' +
                    '<div class="item-name">' + data[i].name.en + '</div>                <div class="item-age">' + data[i].age + ' <span>years</span></div>                <div class="item-phone"><a href="tel:' + data[i].phone + '">' + data[i].phone + '</a></div>                <div class="item-text">' + data[i].phrase.en + '</div>                <div class="item-star"></div>              </div>            </div>          </div>'                );
                  $('.grid').append( $items ).isotope( 'appended', $items );
                }

            } 
          }
          else {
            for(var i=0;i<data.length;i++){




                if ( data[i].video != null ) {
                  var $items = $('<div class="grid-item grid-item--width2"> <div class="item"> <div class="item-inf"> <div class="item-id">' + data[i].id + '</div> <div class="item-ava"><img src="img/' + data[i].image + '.svg" alt=""></div>' +
                  '<div class="item-name">' + data[i].name.ru + '</div>                <div class="item-age">' + data[i].age + ' <span>лет</span></div>                <div class="item-phone"><a href="tel:' + data[i].phone + '">' + data[i].phone + '</a></div>                <div class="item-text">' + data[i].phrase.ru + '</div>                <div class="item-star"></div>              </div>    <div class="item-video"> <video width="100%" height="100%" controls> <source src="video/' + data[i].video + '.mp4" type="video/mp4;"> </video> </div>        </div>          </div>'                );
                  $('.grid').append( $items ).isotope( 'appended', $items );
                }
                else {
                  var $items = $('<div class="grid-item"> <div class="item"> <div class="item-inf"> <div class="item-id">' + data[i].id + '</div> <div class="item-ava"><img src="img/' + data[i].image + '.svg" alt=""></div>' +
                    '<div class="item-name">' + data[i].name.ru + '</div>                <div class="item-age">' + data[i].age + ' <span>лет</span></div>                <div class="item-phone"><a href="tel:' + data[i].phone + '">' + data[i].phone + '</a></div>                <div class="item-text">' + data[i].phrase.ru + '</div>                <div class="item-star"></div>              </div>            </div>          </div>'                );
                  $('.grid').append( $items ).isotope( 'appended', $items );
                }

            }          
          }

      });



  });





     $('.grid').isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      getSortData: {
        id: '.item-id parseInt',
        name: '.item-name',
        age: '.item-age parseInt'
      }
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

  


});