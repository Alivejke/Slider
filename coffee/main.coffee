counter= 0
$.ajax
  type: "GET"
  url: "json/phones.json"
  complete: (response) ->
    popularNews = JSON.parse(response.responseText)
    i = 0

    while i <= 4
      i++
      popularNews.forEach (item) ->
        counter++
        $(".bxslider").append "<li><div class=\"image-wrapper\"><img src="+item.url+"></div><h4 class=\"slider-title\">"+item.title+"</h4><span class=\"description\">"+item.description+"</span><span class=\"price\">"+item.price+"</span></li>"

    $('.bxslider').bxSlider
      pager: true
      minSlides: 3
      maxSlides: 4
      slideWidth: 270
      slideMargin: 30