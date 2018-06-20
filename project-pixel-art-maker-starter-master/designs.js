// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// function makeGrid() {
// 	// Your code goes here!
// 	//alert(Hi);
// 	// const tableHeight;
// 	// const tableWidth;
// 	$('table').children().remove();
// 	tableHeight = $('#inputHeight').val();
// 	tableWidth = $('#inputWeight').val();
// 	$('#pixelCanvas').append('<tbody></tbody>');
// 	for(i=1; i<=tableHeight; i++){
// 		$('tbody').prepend('<tr></tr>');
// 		//alert('Hi, '+ tableHeight + ';'+ tableWidth);	

// 		for(j=1; j<=tableWidth; j++){
// 			$('tr').first().prepend('<td id="cell"></td>');
// 		}
// 	}
// }

// $(function(){
// 	alert("test pass")
// 	if (tableHeight === undefined || tableWidth === undefined ) {
// 		alert("undefined")
// 	}
// 	else{
// 		alert('Height ' + tableHeight + '\n' + 'Width ' + tableWidth)
// 	}
// })

$('#inputButton').on('click',function makeGrid() {
	//alert("aSome");
	const tableHeight = $('#inputHeight').val();
	const tableWidth = $('#inputWeight').val();
	const table = $('#pixelCanvas');
	table.children().remove();

	for(i=1; i<=tableHeight; i++){
		table.prepend('<tr></tr>');
		//alert('Hi, '+ tableHeight + ';'+ tableWidth);	

		for(j=1; j<=tableWidth; j++){
			$('tr').first().prepend('<td></td>');
		}
	}

	$('#inputHeight').text(tableHeight)
	$('#inputWeight').text(tableWidth);

	$("td").on('click', function(event) {
		event.preventDefault();
		//alert("Cell");
		if ($(this).css("background-color")!=($('#colorPicker').val())) {
			$(this).css("background-color",$('#colorPicker').val());
			//alert("aSome");
		}
		else{
			$(this).css("background-color",'transparent');
			//alert("aSomeA");
		}
	});
});
