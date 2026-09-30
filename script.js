function makeid(l) {
  // write your code here
	let res="";
	let char_List="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for(let i=0;i<l;i++){
		
		res+=char_List.charAt(Math.floor(Math.random()*char_List.length));
	}
	return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
