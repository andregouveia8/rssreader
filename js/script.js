$(function () {







    $.ajax({
        url: "https://www.engadget.com/rss.xml",
        type: "GET"
    }).done(function (data, textStatus) {

        console.log(data);
        var lstNews = data.getElementsByTagName("item");
        console.log(lstNews);

        for (i = 0; i < lstNews.length; i++) {

            var title = lstNews[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
            var author = lstNews[i].getElementsByTagName("dc:creator")[0].childNodes[0].nodeValue;
            var creationDate = lstNews[i].getElementsByTagName("pubDate")[0].childNodes[0].nodeValue;
            var description = lstNews[i].getElementsByTagName("description")[0].childNodes[0].wholeText;
            var lstCategories = lstNews[i].getElementsByTagName("category");
            var linkToSee = lstNews[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
            var linkToComment = lstNews[i].getElementsByTagName("comments")[0].childNodes[0].nodeValue;
            var tempDescription = description.split("/>");
            var linkImg = tempDescription[0];
            var newsDescription = tempDescription[1];

            var creationDateTemp = creationDate.split("-");
            var creationDateUpdated = creationDateTemp[0];

            var categories = [];

            for (j = 0; j < lstCategories.length; j++) {
                categoryTemp = lstCategories[j].childNodes[0].nodeValue;
                categories.push(categoryTemp);

            }





            console.log(categories)


            var buttonSee = "<a class='button' target='_blanck'href='" + linkToSee + "'>See on Engadget </a>";
            var buttonComment = "<a class='button' target='_blanck' href='" + linkToComment + "'>Comment the post</a>";


            var html = "<br><div class='card'><div class='card-header'><a href='" + linkToSee + "' target='_blank'><h1>" + title + "</h1></a><p4>" + creationDateUpdated + " posted by " + author + "</p4></div><div class='card-block'><div class='row'>    <div class='col-md-6' ><br><div class='col-md-12'><p1>" + newsDescription + "</p1></div><div class='col-md-12 center'><br><br><div class='col-md-6 center'>" + buttonSee + "</div><br><div class='col-md-6 center'>" + buttonComment + "</div></div></div><div class='col-md-6 center'>" + linkImg + "</p1></div></div></div ></div >"
            $("#news").append(html);

            if (i == 9) {
                break;
            }

        }






    }).fail(function (xhr, status, errorThrown) {
        // alert("Surgiu um problema!");
        console.log("Erro: " + errorThrown);
        console.log("Estado: " + status);
        console.dir(xhr);
    })









});