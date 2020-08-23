$(document).ready(function(){
  $('#sidebarCollapse').on('click',function(){
    $('.sidebar').toggleClass('active');
    $('#dropdownMenuButton').toggleClass('hide');
    $('.dropdown-value').toggleClass('hide');
  });
});  