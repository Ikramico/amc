let showSugs = document.getElementById('sugs');
let sugList = '';
let productsObj = [
	{
		id: 0,
		title: "Forest",
		price: 200,
		image: "../images/p1.jpg",
	},
	{
		id: 2,
		title: "Forest Kie",
		price: 200,
		image: "../images/p5.jpg",
	},
	{
		id: 1,
		title: "Tree",
		price: 400,
		image: "../images/p2.jpg",
	},
	{
		id: 3,
		title: "Breeze",
		price: 300,
		image: "../images/p3.jpg",
	},
	{
		id: 4,
		title: "Forest Road",
		price: 200,
		image: "../images/p4.jpg",
	},
];

let titleArray =  productsObj.map((item)=>item.title.toLowerCase());
console.log(titleArray);

let showResults = (value) => {
	let suggestions = checkData(value);

    suggestions.forEach((element) => {
        sugList += `<li onclick='inputV(${titleArray.indexOf(element)})'> 
  <span class='font-semibold'> ${element }</span>
  </li>`;
    });
    showSugs.innerHTML = `<ul class='bg-gray-50 p-3' id='suggestList' onclick='hider()'> ${sugList} </ul>`


};

let checkData =(val) =>{
   if (val == ''){
    return [];
   }
   else{
    let transformedVal = val.toLowerCase();

    titleArray.filter((titl) => {
        
      return titl.includes(transformedVal);
            
        });
   }
}
