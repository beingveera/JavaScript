fetch('https://www.trackcorona.live/api/countries')
.then(resp => {
	return resp.json();
})
.then( result => {
	console.log(result);
	// console.log(result.data[10].confirmed);
	// console.log(result.data[10].country_code);
	// console.log(result.data[10].dead);
	// console.log(result.data[10].latitude);
	// console.log(result.data[10].location);
	// console.log(result.data[10].longitude);
	// console.log(result.data[10].recovered);

});

ui=`

for (var i =0; i <=result.length; i++) {
<tr>
      <th scope="col">${}</th>
      <th scope="col">${}</th>
      <th scope="col">${}</th>
      <th scope="col">${}</th>
      <th scope="col">${}</th>
      <th scope="col">recovered</th>
      <th scope="col">dead</th>
      <th scope="col">updated</th>
    </tr>
 `
}
