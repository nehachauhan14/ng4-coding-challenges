function marcoPoloFunc(number){
	var result='';
	for(var i=1; i<=number;i++){
        if(i%4==0)  // checks if number is divisible by 4
            result+='marco'
		else if(i%7==0) // checks if number is divisible by 7
            result+='polo'
        else if(i%4==0 && i%7==0) // checks if number is divisible by both 4 and 7
            result+='marcopolo'
		else
            result+=i;
        result+=',';
		}
		result =result.substring(0,result.length-1);
	return result; // returns the single string with required output
}

const output = marcoPoloFunc(100);
console.log(output);