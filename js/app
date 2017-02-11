var app = {
	start: function(){
		var list = this.bullet;
		this.myArray = [];
		list.each(function(){
			app.myArray.push(jQuery(this).find("a").text().charAt(0))
		});
		this.indexes = [];
		for(var x = 0; x < this.myArray.length; x++){
			var letter = this.myArray[x].toUpperCase();
			this.indexes.push(alpha.indexOf(letter));
			console.log(alpha.indexOf(letter), " " + letter);
		}

		//pseduo code
		list.each(function(){
			jQuery(".blog-snippet-2").empty();
			// Insert sort function somewhere
			jQuery(".blog-snippet-2").append(list);
		});
	},
	bullet: jQuery(".blog-snippet-2 li")
}

var alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
