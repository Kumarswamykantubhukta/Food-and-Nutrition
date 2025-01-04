let selected=localStorage.getItem("key2");
let inputval=localStorage.getItem("key1");


const url = `https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public&co2EmissionsClass=A%2B&field%5B0%5D=uri&beta=true&random=true&cuisineType%5B0%5D=American&imageSize%5B0%5D=LARGE&mealType%5B0%5D=${selected}&health%5B0%5D=alcohol-cocktail&diet%5B0%5D=balanced&dishType%5B0%5D=${inputval}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ba7dfd52a2msh6cde0122691fbb4p107f20jsnfbc0df840644',
		'x-rapidapi-host': 'edamam-recipe-search.p.rapidapi.com',
		'Accept-Language': 'en'
	}
};


let div=document.querySelector(".container");
async function fun(){
try {
	const response = await fetch(url, options);
    console.log(response);
	const result = await response.json();
	console.log(result);
  //  image.src=result.hits[0].recipe.image;
    
    // for(let n=0;n<20;n++){
    //     let el=document.createElement("img");
    //     image.after(el);
    //     el.src=result.hits[n].recipe.image;
	// 	let p=document.createElement("p");
	// 	p.append(el);
	// 	p.innerText=result.hits[n].recipe.calories;}
	let k=0;
   for(let i of result.hits){
	let newdiv=document.createElement("div");
	if(k==0){
	div.append(newdiv);
	k++;
	}
	else{
		div.after(newdiv);
	}
	div=newdiv;
	let h=document.createElement("h3");
	h.innerText=i.recipe.label;
	div.append(h);
	let im=document.createElement("img");
	im.src=i.recipe.image;
	div.append(im);
	(()=>{
	let nut=document.createElement("p");
	
	let fun=i.recipe.totalNutrients.CA.label;
	let fun1=i.recipe.totalNutrients.CA.quantity;
	let fun2=i.recipe.totalNutrients.CA.unit;
	nut.innerText=`${fun+" "}${fun1+" "}${fun2+" "}`;
	div.append(nut);})();
	(()=>{
		let nut=document.createElement("p");
		
		let fun=i.recipe.totalNutrients.CHOCDF.label;
		let fun1=i.recipe.totalNutrients.CHOCDF.quantity;
		let fun2=i.recipe.totalNutrients.CHOCDF.unit;
		nut.innerText=`${fun+" "}${fun1+" "}${fun2+" "}`;
		div.append(nut);})();
		(()=>{
			let nut=document.createElement("p");
			
			let fun=i.recipe.totalNutrients.ENERC_KCAL.label;
			let fun1=i.recipe.totalNutrients.CA.quantity;
			let fun2=i.recipe.totalNutrients.CA.unit;
			nut.innerText=`${fun+" "}${fun1+" "}${fun2+" "}`;
			div.append(nut);})();
			(()=>{
				let nut=document.createElement("p");
				
				let fun=i.recipe.totalNutrients.FAT.label;
				let fun1=i.recipe.totalNutrients.FAT.quantity;
				let fun2=i.recipe.totalNutrients.FAT.unit;
				nut.innerText=`${fun+" "}${fun1+" "}${fun2+" "}`;
				div.append(nut);})();
				(()=>{
					let nut=document.createElement("p");
					
					let fun=i.recipe.totalNutrients.K.label;
					let fun1=i.recipe.totalNutrients.K.quantity;
					let fun2=i.recipe.totalNutrients.K.unit;
					nut.innerText=`${fun+" "}${fun1+" "}${fun2+" "}`;
					div.append(nut);})();
					(()=>{
						let nut=document.createElement("p");
						
						let fun=i.recipe.totalNutrients.MG.label;
						let fun1=i.recipe.totalNutrients.MG.quantity;
						let fun2=i.recipe.totalNutrients.MG.unit;
						nut.innerText=`${fun+" "}${fun1+" "}${fun2+" "}`;
						div.append(nut);})();
						(()=>{
							let nut=document.createElement("p");
							
							let fun=i.recipe.totalNutrients.ZN.label;
							let fun1=i.recipe.totalNutrients.ZN.quantity;
							let fun2=i.recipe.totalNutrients.ZN.unit;
							nut.innerText=`${fun+" "}${fun1+" "}${fun2+" "}`;
							div.append(nut);})();
							(()=>{
								let nut=document.createElement("p");
								
								let fun=i.recipe.totalNutrients.SUGAR.label;
								let fun1=i.recipe.totalNutrients.SUGAR.quantity;
								let fun2=i.recipe.totalNutrients.SUGAR.unit;
								nut.innerText=`${fun+" "}${fun1+" "}${fun2+" "}`;
								div.append(nut);})();
								(()=>{
									let nut=document.createElement("p");
									
									let fun=i.recipe.totalNutrients.WATER.label;
									let fun1=i.recipe.totalNutrients.WATER.quantity;
									let fun2=i.recipe.totalNutrients.WATER.unit;
									
									nut.innerText=`${fun+" "}${fun1+" "}${fun2+" "}`;
									div.append(nut);})();
									(()=>{
										let nut=document.createElement("p");
										let fun3=i.recipe.totalWeight;
										nut.innerText=`$Total weight =${fun3}`;
										div.append(nut);})();
										
	
	let cal=document.createElement("p");
	let res=i.recipe.calories;
	cal.textContent="calories="+res;
	console.log(i.recipe.calories)
	div.append(cal);
	for(let j of i.recipe.ingredients){
	let text=document.createElement("p");
	text.innerText=j.text;
	div.append(text);
	}
   }
     
    
} catch (error) {
	console.error(error);
}
}
fun();



