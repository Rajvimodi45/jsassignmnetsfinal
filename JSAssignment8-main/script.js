$(function(){
  $.getJSON("actors.json").done(function(data){
    let $tableBody = $('<tbody id="test"></tbody>');
    let array1 = [];
    let array2 = [];    
    $.each(data.actors, function(index, value){     
      let $row = $('<tr></tr>');
      $row.append($('<td class="name"></td>').text(value.name));
      $row.append($('<td></td>').text(value.gender));
      $row.append($('<td></td>').text(value.birthday));
      $row.append($('<td></td>').text(value.married)); 
      $tableBody.append($row);
      
      if(data.actors[index].name.charAt(0) <= 'N') {
        array1.push(data.actors[index]);
      } else {
        array2.push(data.actors[index]);
      }
    });

    $('thead').after($tableBody);

    let temp = [];
    let $tds = $('.name');
    $.each($tds, function( index, value ) {
      temp.push({
        element: this,
        text: $tds[index].innerText.trim().toLowerCase()
      });
    });

    $('#button1').append(`A-M (${array1.length})`).addClass('active').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
      $('td').hide();
        temp.forEach(function (td) {
          if ($(td.element).text().charAt(0) <= 'N'){
            $(td.element).show();
            $(td.element).siblings().show();
          }
        });
    });

    $('#button2').append(`N-Z (${array2.length})`).addClass('active').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
      $('td').hide();
      temp.forEach(function (td) {
        if ($(td.element).text().charAt(0) > 'N'){
          $(td.element).show();
          $(td.element).siblings().show();
        }
      });
    });

    let $search = $('#filter-search');
    let cache = [];
    
    $.each($tds, function( index, value ) {
      cache.push({
        element: this,
        text: $tds[index].innerText.trim().toLowerCase()
      });
    });

  
    function filter() {
      let query = this.value.trim().toLowerCase();
      
      if(query) {
        cache.forEach(function (td) {
          let index = 0;
          index = td.text.indexOf(query);
          // td.element.style.backgroundColor = index === -1 ? '' : 'yellow';
          // console.log("d", $(td.element).parent());
          if(index === -1){ 
            $(td.element).siblings().css("background-color", "") 
            $(td.element).css("background-color", "")   
          } else {
            $(td.element).siblings().css("background-color", "yellow")
            $(td.element).css("background-color", "yellow")
          } 
        });
      } 
      if(!query) {
        cache.forEach(function(td){
          td.element.style.backgroundColor = "";
          $(td.element).siblings().css("background-color", "")
        });

      }

    }
  
    if('oninput' in $search[0]) {
      $search.on('input', filter);
    } else {
     $search.on('keyup', filter);
    }

  

  });


});
