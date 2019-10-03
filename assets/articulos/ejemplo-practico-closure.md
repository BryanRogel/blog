## Qué es un closure en JS?
Empecemos por definir que es un closure (algunos las llaman como clausura o cerradura yo prefiero llamarle closure😅). En pocas palabas un closure es:
> Un closure es una función que está dentro de otra funcion.

Simple y al grano es una función dentro de otra. Ahora bien ¿para qué nos puede servir hacer un closure en nuestro codigo? La principal ventaja es que nos permite tener variables en la funcion padre que solo serán accesibles desde la funcion interna (hija), además de poder acceder tambien a los parametros de la función padre. Esto nos permite tener un **estado privado** dentro de nuestra función pero más interesante aun que este sea ***un estado reusable***.

Un parte importante de los closures es que deben ser retornados por la funcion padre hacia el exterior, a esto se le conoce como función de alto nivel o en inglés *High Order Functions*, te invito investigar más sobre ello.

Regresando a los closures un ejemplo sencillo seria:

```js
const contador = () => {   //funcion padre
    let valor = 0;      //estado privado y reusable

    return ()=>{        //closure o funcion hija
        return valor++;
    }
}
```

Ahora para utilizar nuestro closure:

```js
const contar = contador();  //guardamos el closure en la constante contar

console.log(contar())   //0
console.log(contar())   //1
console.log(contar())   //2
```

Cada vez que llamamos *contar()* accedemos al closure, se retorna su valor actual y luego suma 1 a la variable *valor*.

### Pruebalo
<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="anb98" data-slug-hash="bGbXgJG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Closure">
  <span>See the Pen <a href="https://codepen.io/anb98/pen/bGbXgJG">
  Closure</a> by Abdiel Martinez (<a href="https://codepen.io/anb98">@anb98</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## A la práctica
Aunque desde que aprendí este concepto me pareció muy interesante, aun no habia conseguido encontrar un caso practico, finalmente encontre uno podria serle util a más de algun.

El problema consiste en realizar consultas a una api, en mi caso realtime de firebase, donde cada resultado quede disponible para que en la siguiente vez que se solicite el mismo dato en lugar de volver a llamar a la *api*, el resultado se devuelva desde el estado local, reduciendo asi el tiempo de respuesta.

Mi solucion:

```js
import firebase from 'firebase';

const buscarNodo = (nodo) => {
    const data = {};    //estado reusable

    return async (valor) => {   //closure asincrono
        if (valor) {

            const res = data[valor];
            if (res)    
                return res;  //si existe en el estado local se retorna

            else {
                const snap = await firebase
                .database()
                .ref()
                .child(nodo)
                .child(valor)
                .once('value');

                if (snap.exists()) {
                    const result = snap.val();
                    result.key   = valor;
                    data[valor]  = result;  //se argega al estado local

                    return result;  
                }
            }
        }
        
        return false;   //si no existe valor de busqueda 
        //o si no hay resultados en el estado local ni en la api
    }
}

export default buscarNodo;
```
¿Qué le mejorarias?🤔

Para utilizarlo podria  ser:
```js
const buscarAlumno   = buscarNodo('alumnos');
const buscarMateria  = buscarNodo('materias');
const buscarProfesor = buscarNodo('profesores');

(async ()=>{  
    // esto es conocido como funcion invocada 
    // inmediatamente, en ingles: Immediately invoked function expression (IIFE)


    const alumnoEncontrado   = await buscarAlumno( 'idAlumno');
    const materiaEncontrada  = await buscarMateria( 'idMateria' );
    const profesorEncontrado = await buscarProfesor( 'idProfesor' );

})();
```

Este es mi caso particular, la llamada a firebase podria ser sustituida por cualquier otra api.

¿Qué otra idea se te ocurre para utilizar closures?
Compartelo en los comentarios 😊