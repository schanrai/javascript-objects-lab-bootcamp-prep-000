var recipes ={'chocolate cake': 'page 2',
  'raspberry truffle': 'page 3'};

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key] = value;
  return recipes;
}

function updateObjectWithKeyAndValue(recipes, key, value){
  return recipesNew.assign({}, recipes, { [key]: value });
}