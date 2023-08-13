const validation = () => {
  const errors = {};
  //verificamos que el campo no este vacio y que comience al menos con una letra.
  if (!dogsData.name.trim()) {
    errors.name = 'Write a name, please';
  } else if (parseInt(dogsData.name)) {
    errors.name =
      'Name is invalid, please use at least one letter at the beginning';
  }
  //Verificamos que seleccionen un temperamento al menos
  if (!dogsData.temperament) {
    errors.temperament = 'Select one or more temperaments, please';
  }
  //Verificamos que la altura minima este en el rango del 1-100
  if (dogsData.heightMin < 0 || dogsData.heightMin > 100) {
    errors.heightMin =
      'Require field, please write a valid number between 1 and 100';
  }
  //Verificamos que la altura maxima sea mayor a la minima
  if (dogsData.heightMax < dogsData.heightMin) {
    errors.heightMin =
      'The minimum value cannot be greater than the maximum value';
  }
  //verificamos el peso minimo se encuentre entre 1 y 100
  if (dogsData.weightMin < 0 || dogsData.weightMin > 100) {
    errors.weightMin =
      'Require field, please write a valid number between 1 and 100';
  }
  //verificamos que el peso maximo este entre 1 y 100
  if (dogsData.weightMax < 1 || dogsData.weightMax > 100) {
    errors.weightMax =
      'Require field, please write a valid number between 1 and 100';
  }
  //Verificamos que el peso maximo no sea menor al minimo
  if (dogsData.weightMax < dogsData.weightMin) {
    errors.weightMin =
      'The minimum value cannot be greater than the maximum value';
  }
  //verificamos que el campo de años de vida no este vacio
  if (!dogsData.yearsOfLife) {
    errors.yearsOfLife = 'This field cannot be empty, please enter a number';
  }
  return errors;
};
export default validation;
