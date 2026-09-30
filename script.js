function makeid(l) {
  // write your code here
	let res="";
	let char_List="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for(let i=;i<l;i++){
		let index=Math.floor(Math.random()*char_List.length);
		res+=char_List[index];
	}
	return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
