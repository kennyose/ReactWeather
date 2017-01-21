function addPromise (a, b) {
    return new Promise(function (resolve, reject) {
			if (typeof a === "number" && typeof b === "number")	{
				resolve(a+b);
			} else 
			reject('something went wrong');
		});
}

addPromise(2, 1000).then(function(sum) {
	console.log('the sum is ' + sum);
} , function(err) {
	console.log('err is ' + err);
});