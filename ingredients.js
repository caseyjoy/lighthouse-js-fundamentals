const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let ingredient = 0;
while(ingredient < ingredients.length){
  console.log(ingredients[ingredient])
  ingredient++;
}
// Write a for loop that prints out the contents of ingredients:
for(let forIngredient = 0; forIngredient < ingredients.length; forIngredient++){
  console.log(ingredients[forIngredient]);
}

/*
  for (let forOfIngredient of ingredients){
    console.log(forOfIngredient);
  }
*/

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for(let forIngredient = ingredients.length-1; forIngredient > 0; forIngredient--){
  console.log(ingredients[forIngredient]);
}