
function dup(){
  const fltType = document.getElementById('flt');
  console.log(fltType.value)
  for (let i =0;i< fltType.value;i++){
    $('#mtable1 tr').append($("<td>"));
    $('#mtable1 tbody tr').each(function(){$(this).children('td:last').append($('<input type="checkbox">'))});
    $('#mtable2 tr').append($("<td>"));
    $('#mtable2 tbody tr').each(function(){$(this).children('td:last').append($('<input type="checkbox">'))});
  }
  event.preventDefault()
}


