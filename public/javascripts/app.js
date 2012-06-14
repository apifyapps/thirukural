var apiUrl = "http://apify.heroku.com/api/thirukural/:id.json?callback=?";
var number = 1;
$(function(){
  // Random utils
  function getRandomNumber(maxValue){
    return Math.floor(Math.random() * maxValue) + 1;
  }
  //Fetch Kural and Display
  function fetchAndDisplayKural(){
    $.getJSON(apiUrl.replace(':id', number), function(jsonString){
      var data = JSON.parse(jsonString);
      $('#kural-number').html(data.id);
      $('#kural-content').html(data.kural);
    });
  }
  $('#random-kural').click(function(){
    number = getRandomNumber(1330);
    fetchAndDisplayKural();
  });
  $('#prev-kural').click(function(){
    if(number != 1){
      number -= 1;
      fetchAndDisplayKural();
    }
  });
  $('#next-kural').click(function(){
    if(number != 1330){
      number += 1;
      fetchAndDisplayKural();
    }
  });
  fetchAndDisplayKural();
});