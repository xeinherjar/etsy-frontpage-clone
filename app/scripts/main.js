
var rc = $('.results-content');

function buildIMG(url) {
  return '<img src="' + url + '" />';
}


etsyItems.results.forEach( function(x) {
  var img_URL = x.Images[0].url_75x75;
  var img = '<img src="' + img_URL + '" /"';
  var name = x.Shop.shop_name;
  var title = x.title;
  var url = x.url;
  var price = x.price;

  var el = '<div class="listing">' +
           img +
           '<span>' + title + '</span>' +
           '<div class="listing-footer">' +
           '<span>' + name + '</span>' +
           '<span>' + price + '</span>' +
           '</div> </div>';

  rc.append(el);
});
