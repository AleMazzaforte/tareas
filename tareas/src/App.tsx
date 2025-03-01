
import './App.css'

function App() {
  



  let s = '{[({})]}';
  function isBalanced(s: string): boolean {
    if (s.length % 2 === 0) {
      const partners = new Map<string, string>([
        ["{", "}"],
        ["[", "]"],
        ["(", ")"]
      ]);
  
      const caracteres: string[] = s.split("");
      const primerMitad: string[] = [];
      const segundaMitad: string[] = [];
  
      for (let i = 0; i < caracteres.length / 2; i++) {
        primerMitad.push(caracteres[i]);
      };
  
      for (let i = caracteres.length / 2; i < caracteres.length; i++) {
        segundaMitad.push(caracteres[i]);
      };
  
      const primerMitadTransformada: string[] = primerMitad.map(caracter => partners.get(caracter) ?? "").reverse();
  
      if (primerMitadTransformada.join('') === segundaMitad.join('')) {
        console.log('exito');
        return true;
      } else {
        console.log('error');
        return false;
      }
    }
    return false;
  }
  console.log('isbalanced', isBalanced);
  
 const isString = (value: unknown): value is string => {
    return typeof value === 'string';
  }
  const name = 'Patata';
  if (isString(name)) {
    console.log('isName', name.toUpperCase(), typeof name);
  }
  
  return (
    <>
      <div>
        <h1>Patata</h1>
      </div>
    </>
  )
}

export default App
