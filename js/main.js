$(document).ready(function(){

  $('#start').click(function(){

    $('#ajax').load('content/template.html');
  });

  $('#about').click(function(){

    $('.page_content').load('content/about.html');
  });

  $('#career').click(function(){

    console.log("career");
    $('.page_content').load('content/career.html');
  });

  $('#portfolio').click(function(){

    $('.page_content').load('content/portfolio.html');
  });

});