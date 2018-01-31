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
            var description = lstNews[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
            var categories = lstNews[i].getElementsByTagName("category")[0].childNodes[0].nodeValue;
            var linkToSee = lstNews[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
            var linkToComment = lstNews[i].getElementsByTagName("comments")[0].childNodes[0].nodeValue;

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