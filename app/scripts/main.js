
var rc = $('.results-content');


etsyItems.results.forEach( function(x) {
  var img_URL = x.Images[0].url_170x135;
  var name = x.Shop.shop_name;
  var shop_url = x.Shop.url;
  var title = x.title;
  var url = x.url;

  var p_sign;
  switch(x.currency_code) {
    case "USD":
      p_sign = "$";
      break;
    case "GBP":
      p_sign = "£";
      break;
    default:
      p_sign: "$";

  }
  var price = p_sign + x.price + " " + x.currency_code;
  var alt_text = ' title="' + title + '"';
  var img = '<img src="' + img_URL + '"' + alt_text + '" />';
  var el = '<div class="listing">' +
           '<a href="' + url + '">' + img + '</a>' +
           '<div class="title"' + alt_text +'>' + 
           '<a href="' + url + '">' + title + '</a></div>' +
           '<div class="listing-footer">' +
           '<span>' + 
           '<a href="' + shop_url + '" title="' + name + '">' +
           name + '</a></span>' +
           '<span>' + price + '</span>' +
           '</div>' +
           '</div>';

  rc.append(el);
});
