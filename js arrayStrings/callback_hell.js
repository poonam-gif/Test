//To avoid callback hell in Js we are using Js promises.

//1 . get the roll number from API after 2 sec
// 2.Get the name and age of student after another 2 sec
// 3. Get the gender fter 2s
const getData=()=>{
	setTimeout(()=>{
		console.log("API getting Roll number");
		var roll_no = [1,2,3,4,5];
		console.log(roll_no);
		setTimeout((rollno)=>{
			const biodata={
				name:'poonam',
				age:26
			}
			console.log(`Rollno ${rollno}.My name is ${biodata.name},My age is ${biodata.age}`);
			setTimeout((name)=>{
				biodata.gender = 'female';
				console.log(`My gender is ${biodata.gender}`)
			},2000,biodata.name)
	},2000,roll_no[1]);
	},2000);

}
getData();