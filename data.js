// Object = Products
// Keys = book / albums / electronics / etc.
	//Book ID / Album ID
		// name = string
		// category = string
		// price = number
		// picture_url = string
		// selling points = array of strings

var products = {
		books : {
			id47878743 : {
				name : 'The Sirens of Titan',
				category : 'Fiction',
				price : 0,
				picture_url : 'http://bit.ly/1rFq4Dd',
				selling_points : ['fun' , 'cool', 'interesting']
			}
		}	
};

//write function that adds items to Products and generate unique ID

function create_products(type, product_name, product_category, product_price, product_picture_url, product_selling_points){
	var genId = 'id' + Math.random().toString(36).substr(2, 9);
	products[type][genId] = {};
	products[type][genId].name = product_name;
	products[type][genId].category = product_category;
	products[type][genId].price = product_price;
	products[type][genId].picture_url = product_picture_url;
	
}
create_products('books','LOTR','Fiction',10, 'http:something ', ['awesome', 'long'] );
console.log(products);



//Refactor your code so that you can call a function add_to_page(book1), passing in an object, and that object will be placed using jQuery into the html page. Now you should just call add_to_page for each product and the add_to_page function will place it on the page for you.

function add_to_page(productObject) {

	//do some jQuery
}

// function use to place 1 product -- jeff's assignment
// find product by name

function find_product_name(productName) {
	for (key in products) {
	     
	     if (key === productName) {
	          
	     }
	}
}














function find_product_by_category(categoryName) {
	for (key in products) {
		if (key === categoryName) {
			
		}
	}
}

// function to place all products - ALL products


//#10 
//For loop to iterate items







//For loop for dropdown

//Search box #15 check 

