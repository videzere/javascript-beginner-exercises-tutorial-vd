function getColor(colorname){
	switch(colorname){
		// Add more options here
        case 'red':   
            return true;
            break;
        case 'green':
            return true;
            break;
        case 'blue':
            return true;
            break;
	    default:
	    	return false;  //returns false because the user picked an unavailable color
	        break;               
	}
}

var colorname = prompt('What color do you want?');
var colorname = colorname.toLowerCase();
console.log(colorname);
var isAvailable = getColor(colorname);
console.log(isAvailable);

if(isAvailable)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');