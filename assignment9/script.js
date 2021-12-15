let count = 0;
let characterDetail;

function load_data() {
    // Show loader
    $('#loader').removeClass('rajvi')
    // Selecting the table Element   
    setTimeout(() => {
        $.ajax({
            // JSON FILE URL
            url: 'film.json',
            // Type of Return Data
            dataType: 'json',
            // Error Function
            error: err => {
                console.log(err)
                alert("An error occured")
                $('#loader').addClass('rajvi')
            },
            // Succes Function
            success: function (resp) {
                if (resp.length > 0) {
                    // If returned json data is not empty
                    var i = 1;
                    characterDetail = resp;
                    // looping the returned data               

                    createTable(resp)
                } else {
                    // If returned json data is empty
                    var tr = $('<tr>')
                    tr.append('<th class="py-1 px-2 text-center">No data to display</th>')
                    table.find('tbody').append(tr)
                }
                $('#loader').addClass('rajvi')
            }

        })
    }, 500)

}

$(function () {
    // Hide loader on document ready
    $('#loader').addClass('rajvi')
    setTimeout(() => {
        load_data()
    }, 200)
    // Reload Button Function
    $('#reload_data').click(function () {
        // refreshing the table data
        load_data()
    })
})

function createTable(movieDetails){
    var table = $('#table-list')
    // Emptying the Table items
    table.find('tbody').html('')
    for (i = 0; i < movieDetails.length; i++) {
        var tr = $('<tr>')
        // first column data
        tr.append('<td class="py-1 px-2 text-center">' + movieDetails[i].id + '</td>')
        // second column data
        tr.append('<td class="py-1 px-2 character_name">' + movieDetails[i].name + '</td>')
        // third column data
        tr.append('<td class="py-1 px-2">' + movieDetails[i].genre + '</td>')
        // fourth column data
        tr.append('<td class="py-1 px-2">' + movieDetails[i].date + '</td>')
        // fifth column data
        tr.append('<td class="py-1 px-2">' + movieDetails[i].region + '</td>')
        // sixth column data
        tr.append('<td class="py-1 px-2">' + movieDetails[i].country + '</td>')

        // Append table row item to table body
        table.find('tbody').append(tr)
    }
}



$("th").each(function (column) {
    $(this).click(function () {
        let type = $(this).attr("class");       
        let records = $("table").find("#table-content > tr");
        if (count === 1) {
            $(".chevron").html("");
            $(this).find("span").html("&#x25B2;");
            records.sort(function (a, b) {
                let value1 = $(a).children("td").eq(column).text();
                let value2 = $(b).children("td").eq(column).text();
                if (type === "number") {
                    value1 *= 1;
                    value2 *= 1;
                }
                return value1 > value2 ? 1 : value1 < value2 ? -1 : 0;
            });
            $.each(records, function (index, row) {
                $("#table-content").append(row);
            })
            count++;
            return;
        }

        if (count === 0) {
            $(".chevron").html("");
            $(this).find("span").html("&#x25BC;");
            records.sort(function (a, b) {
                let value1 = $(a).children("td").eq(column).text();
                let value2 = $(b).children("td").eq(column).text();
                if (type === "number") {
                    value1 *= 1;
                    value2 *= 1;
                }
                return value1 > value2 ? -1 : value1 < value2 ? 1 : 0;
            });
            $.each(records, function (index, row) {
                $("#table-content").append(row);
            })
            count++;
            return;
        }

        if (count === 2) {
            console.log("count");
            $(".chevron").html("");
            $(this).find("span").html("");
            $('#table-content').empty();            
            createTable(characterDetail);
            count = 0;
            return;
        }


    })
})