
class Recipe {
  constructor(recipe) {
    this.id = recipe.id,
    this.name = recipe.name,
    this.ingredients = recipe.ingredients,
    this.instructions = recipe.instructions,
    this.tags = recipe.tags,
    this.image = recipe.image,
    this.ingredientCodes = recipe.ingredients.map((item) => {
      return item.id
    });
  }

  returnIngredientNames(ourIngredients)  {
    const names = ourIngredients.reduce((ingredientNames, item) => {
      if (this.ingredientCodes.includes(item.id)) {
        ingredientNames.push(item.name);
      }
      return ingredientNames;
    }, [])
    return names
  }

  returnTotalCost(ourIngredients) {
    let totalCost = 0;
    const ingredientQuantity = this.ingredients.map(item => {
      return item.quantity.amount
    });
    const cost = ourIngredients.filter(item => {
      if (this.ingredientCodes.includes(item.id)) {
        return item.estimatedCostInCents;
      }
    })
    console.log(cost)
    for (let i = 0; i < ingredientQuantity.length; i++) {
      totalCost += (ingredientQuantity[i] * cost[i].estimatedCostInCents)
    }
    totalCost /= 1000;
    return Math.round(100*totalCost)/100;
  }

  returnInstructions() {
    return this.instructions;
  }
}



module.exports = Recipe;
