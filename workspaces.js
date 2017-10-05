// filter by type and distance from current location
// manhattan & brooklyn 

// workspace object

var workspace = {
	name: "",
	address: "",
	cost: "",
	// wifi: true
	// rating:
	// type: cafe, coffee shop, public space, park, indoors, outdoors, library
	// outlets
	// bathrooms
	// seats: plenty, few
}

var checkIcon = `<i class="fa fa-check-circle-o" aria-hidden="true"></i>`;

// Caffe Bene

var caffebene_tribeca = {
	name: "Caffe Bene",
	region: "TriBeCa",
	address: "378 Canal St New York, NY 10013",
	cost: "$$",	
	outlets: checkIcon,
	restroom: checkIcon,
	seats: "plenty",
	type: "bubble tea shop"
}

var caffebene_greenwich = {
	name: "Caffe Bene",
	region: "Greenwich Village, East Village",
	address: "378 Canal St New York, NY 10013",
	cost: "$$",	
	outlets: checkIcon,
	restroom: checkIcon,
	seats: "plenty",	
	type: "bubble tea shop"
}

var caffebene_alphabetCity = {
	name: "Caffe Bene",
	region: "East Village, Alphabet City",
	address: "208 Ave A New York, NY 10009",
	cost: "$$",	
	outlets: checkIcon,
	restroom: checkIcon,
	seats: "few",	
	type: "bubble tea shop"
}

var caffebene_bensonhurst = {
	name: "Caffe Bene",
	region: "Bensonhurst",
	address: "6307 18th Ave Brooklyn, NY 11204",
	cost: "$$",	
	outlets: checkIcon,
	restroom: checkIcon,
	seats: "plenty",	
	type: "bubble tea shop"
}

// Argo Tea

var argotea_broadway = {
	name: "Argo Tea",
	region: "Broadway",
	address: "949 Broadway New York, NY 10010",
	cost: "$$",	
	outlets: checkIcon,
	restroom: checkIcon,
	seats: "plenty",	
	type: "tea shop"
}

var argotea_chelsea = {
	name: "Argo Tea",
	region: "Chelsea",
	address: '275 7th Ave New York, NY 10001',
	cost: "$$",	
	outlets: checkIcon,
	restroom: checkIcon,
	seats: "plenty",	
	type: "tea shop"
}


// Other

var wholefoods_tribeca = {
	name: "Whole Foods Market",
	region: "TriBeCa",
	address: '270 Greenwich St New York, NY 10007',
	cost: "$$",	
	outlets: checkIcon,
	restroom: checkIcon,
	seats: "plenty",	
	type: "cafe"	
}

var capitalOne = {
	name: "Capital One Bank / Peet's Coffee",
	region: "Union Square",
	address: '853 Broadway New York, NY 10003',
	cost: "$$",	
	outlets: checkIcon,
	restroom: checkIcon,
	seats: "plenty",	
	type: "bank / coffee shop"	
}

var aceHotel = {
	name: "Ace Hotel / Stumptown Coffee Roasters",
	region: "Flatiron",
	address: '20 W 29th St New York, NY 10001',
	cost: "$$",	
	outlets: checkIcon,
	restroom: checkIcon,
	seats: "plenty",	
	type: "hotel lobby"	
}

var formosaCafe = {
	name: "Formosa Cafe",
	region: "Sunset Park, Brooklyn",
	address: '20 W 29th St New York, NY 10001',
	cost: "$$",	
	outlets: checkIcon,
	restroom: checkIcon,
	seats: "plenty",	
	type: "hotel lobby"	
}

/* PUBLIC SPACES */
var rubenstein = {
	name: "David Rubenstein Atrium",
	region: "Upper West Side",
	address: '61 W 62nd St New York, NY 10023',
	cost: `<span class="free">FREE</span>`,	
	outlets: checkIcon,
	restroom: checkIcon,
	seats: "plenty",	
	type: "public space"	
}

/* LIBRARIES */
var SIBL = {
	name: "SIBL",
	region: "Midtown East",
	address: '188 Madison Ave New York, NY 10016',
	cost: `<span class="free">FREE</span>`,	
	outlets: checkIcon,
	restroom: checkIcon,
	seats: "plenty",	
	type: "Library"	
}

var NYPL = {
	name: "NYPL",
	region: "Midtown West",
	address: '476 Fifth Ave New York, NY 10018',
	cost: `<span class="free">FREE</span>`,	
	outlets: checkIcon,
	restroom: checkIcon,
	seats: "plenty",	
	type: "Library"	
}

// Caffe Bene, Argo Tea, Whole Foods, Peet's Coffee, BK Express, Furmosa Cafe
// NYPL, Rubenstein Atrium, Union Sq Park, Subway Station, ACE Hotel


// array of coffee shops
var coffee_shops = [{id: "0"}, caffebene_tribeca, caffebene_greenwich, caffebene_alphabetCity, argotea_broadway, argotea_chelsea, capitalOne, aceHotel];
var cafes = [{id: "1"}, formosaCafe];
var public_spaces = [{id: "2"}, rubenstein]
var libraries = [{id: "3"}, SIBL, NYPL]



function test(arr, id) {
	var str = `<div id='info${arr[0].id}'`;
	for (var i = 1; i < arr.length; i++) {
		str += `<p>
		${arr[i].name} { ${arr[i].cost} }<br> 
		${arr[i].address} <br> 
		Outlets: ${arr[i].outlets},
		Restroom: ${arr[i].restroom} <br>
		Seats: ${arr[i].seats} <br>
		<p> &nbsp;</p>
		</p>`;
		// console.log(arr[i].name);
	}
	str += `</div>`
	console.log(str);
	$(id).html(str);
}

// test(coffee_shops);

$('.collapse').on('click', function() {
	// for (var i = 0; i < $('.collapse').length; i++) {
	if($(`#info${this.id}`).text() ) {
		$(`#info${this.id}`).html('');
		console.log(this.id);
		console.log('ok');
	} else {
		display(this.id);
		
	}
})

// display workspaces based on section click 
function display(id) {
	switch (id) {
		case "0":
			test(coffee_shops, "#info0");
			break;
		case "1":
			test(cafes, "#info1");
			break;		
		case "2":
			test(public_spaces, "#info2");
			break;		
		case "3":
			test(libraries, "#info3");
			break;		
		case "4":
			test(nearby, "#info4");
			break;
	}
}


function alternate(type) {
	$('.collapse').on('click', function() {
		if ($('#coffee-shops').text()) {
			$('#coffee-shops').html('');
			$('.collapse').html('+');		
		} else {
			test(coffee_shops);
			$('.collapse').html(`<i class="fa fa-minus" aria-hidden="true"></i>`);
		}
	});
}


// console.log($('.section').text());

// var i = 0;
// for (i in manhattan_coffee_shops) {
// 	console.log(i, manhattan_coffee_shops[i]);
// }

// array of cafes
// array of public spaces 
