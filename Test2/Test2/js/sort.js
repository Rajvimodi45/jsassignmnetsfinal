$(function(){

    let compare = { 
        alphabetical: function (a, b) { 
            if (a < b) { 
                return -1; 
            } else { 
                return a > b ? 1 : 0;
            }
        }, 
        number: function (a, b) {
            return a - b;
        },
        date: function (a, b) { 
            a = new Date(a); 
            b = new Date(b); 
            return a - b; 
        }
    }

    $('th').on('click', function(e) {
        let $tbody = $('table').find('tbody'); // Table body
        let rows = $tbody.find('tr').toArray(); // don't move this out of this function
       
       
        //sorting code goes here


    });

});