var api_sample, apilength, apielement, i, read_json, parse_json, xobj;

// api_sample = [
//   {
//     "id": 1,
//     "product_category_id": 4,
//     "name": "Sun 10"
//   },
//   {
//     "id": 2,
//     "product_category_id": 4,
//     "name": "Sun 50"
//   },
//   {
//     "id": 3,
//     "product_category_id": 4,
//     "name": "Sun 150"
//   },
//   {
//     "id": 4,
//     "product_category_id": 4,
//     "name": "Sun 300"
//   },
//   {
//     "id": 5,
//     "product_category_id": 4,
//     "name": "Sun 500"
//   }
// ];


xobj = new XMLHttpRequest();
xobj.overrideMimeType("application/json");
xobj.open('GET', 'js/sample.json', true); // Replace 'my_data' with the path to your file
xobj.onreadystatechange = function () {
		console.log(xobj)
    if (xobj.readyState == 4 && xobj.status == 200) {
    	console.log('ana');
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode

      read_json = xobj.responseText
      parse_json = JSON.parse(read_json); // parse json

      // console.log(parse_json)
			apilength = parse_json.length;
			apielement = "<ul>";

			  for (i = 0; i < apilength; i++) {
			  	// list of array
			  	// call another api
			    apielement += 
          "<li>" 
            + "<a href='http://api.me/try/"+parse_json[i].id+"'>" + parse_json[i].id; + "</a>" + 
          "</li>";
			  }

			apielement += "</ul>";


			document.getElementById("demo").innerHTML = apielement;
    }
};

xobj.send(null);
// json_return = JSON.stringify(api_sample); // coverts to json
// parse_json = JSON.parse(read_json); // parse json



// function clickName() {
//   document.getElementById("demo").innerHTML = apielement;
// }
// clickName();