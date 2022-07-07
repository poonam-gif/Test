const arr = [1,2,3,4,5];

const prob = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		let roll_no = [1,2,3,4,5];
		resolve(roll_no);
		//reject("Something went Wrong")
	},3000)
})

const getBiodata=(indexdata)=>{
	//console.log(indexdata);
	return new Promise((resolve,reject)=>{
		setTimeout((indexdata)=>{
			let biodata ={
			name : 'Ankiya',
			age : 26
		}
		 resolve(` My name with Promise is ${biodata.name} ,roll number is ${indexdata} and Age is ${biodata.age}`);
		// },2000,indexdata)
		//reject("Error Something went Wrong");
		
	});
});
}

const prob1 =  new Promise((resolve,reject)=>{
	setTimeout(()=>{
		let gender ='male';
		resolve(gender);
	},3000)
})


prob.then((rollno,gender)=>{
		console.log(rollno);

		return getBiodata(rollno[1]);
}).then((test)=>{
		console.log(test);
		return prob1;
}).then((gender)=>{
		console.log(gender);
		//return prob1(rollno[1]);
}).catch(()=>{
	console.log("error");
})
