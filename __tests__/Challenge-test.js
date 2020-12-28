/**
 * Solução para o Exercício 2 da Fluke
 * - Restrições:
 * - 1 < n <100
 * - É garantido que este é um número ímpar.
 * - 0 < arr[i] < 100 onde 0 < i < n
 */
function validate(arr){
  arr.forEach((v) => {
    if(v <= 0 && v >= 100){
      throw "Restrição não satisfeita: 0 < arr[i] < 100"
    }
  })

  const unique = arr.filter((v) => arr.indexOf(v) === arr.lastIndexOf(v))[0];

  if(unique % 2 === 1){
    if(arr.length > 0 && arr.length < unique){
      return unique;
    }else{
      throw "Restrição não satisfeita: 0 < i < n";
    }
  }else{
    throw "Error: n não é ímpar";
  }
}

it('Exercício 2, array válido', () => {
  const arrT = [1, 1, 2, 2, 4, 4, 9];

  try{
    const valid = validate(arrT);
    expect(typeof valid).toBe("number");
  }catch(e){
    console.log(e);
  }
})

it('Exercício 2, erro (número par)', () => {
  const arrT = [1, 1, 4];

  try{
    validate(arrT);
  }catch(e){
    expect(e).toBe("Error: n não é ímpar");
  }
})

it('Exercício 2, erro (0 < i < n)', () => {
  const arrT = [1, 1, 2, 2, 3];

  try{
    validate(arrT);
  }catch(e){
    expect(e).toBe("Restrição não satisfeita: 0 < i < n");
  }
})

it('Exercício 2, erro (0 < arr[i] < 100)', () => {
  const arrT = [1, 1, 101];

  try{
    validate(arrT);
  }catch(e){
    expect(e).toBe("Restrição não satisfeita: 0 < arr[i] < 100");
  }
})