
var rc = $('.results-content');

function buildIMG(url) {
  return '<img src="' + url + '" />';
}


etsyItems.results.forEach( function(x) {
  var img_URL = x.Images[0].url_170x135;
  var img = '<img src="' + img_URL + '" />';
  var name = x.Shop.shop_name;
  var title = x.title;
  var url = x.url;

  var p_sign;
  switch(x.currency_code) {
    case "USD":
      p_sign = "$";
      break;
    case "GBP":
      p_sign = "L";
      break;
    default:
      p_sign: "$";

  }
  var price = p_sign + x.price + " " + x.currency_code;

  var el = '<div class="listing">' +
           img +
           '<div class="title">' + title + '</div>' +
           '<div class="listing-footer">' +
           '<span>' + name + '</span>' +
           '<span>' + price + '</span>' +
           '</div>' +
           '</div>';

  rc.append(el);
});
