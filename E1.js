/*Crear el array de objetos "Pizzas". 馃崟
馃憠 Debemos crear 6 objetos como m铆nimo.
馃憠 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). */
const pizzas = [{id: 1, name: "Muzzarella", ingredients: ["salsa de tomate", "queso mozzarella", "or茅gano"], price: "1200"},
                {id: 2, name: "Napolitana", ingredients: ["salsa de tomate", "queso mozzarella", "or茅gano", "Jam贸n", "Tomate"], price: "1350"},
                {id: 3, name: "Margarita",  ingredients: ["salsa de tomate", "queso mozzarella", "albahaca"], price: "1200"},
                {id: 4, name: "Cuatro Quesos", ingredients: ["salsa de tomate", "queso mozzarella", "queso gorgonzola", "queso parmesano", "queso fontina"], price: "1800"},
                {id: 5, name: "Fugazzeta Rellena", ingredients: ["cebolla", "queso mozzarella", "jam贸n"], price: "1800"},
                {id: 6, name: "Hawaiana", ingredients: ["salsa de tomate", "queso mozzarella", "jam贸n", "anan谩"], price: "1500"}]

/*馃敟 Crear una iteraci贸n del array que imprima en consola:
a) Las pizzas que tengan un id impar.*/
const impar = pizzas.filter((pizzas) => pizzas["id"] % 2 == 1)
impar.forEach((pizzas) => {
    console.log(`La ${pizzas.name} tiene id impar`)
})

/*b) 驴Hay alguna pizza que valga menos de $600?*/
const barato = pizzas.find((pizzas) => pizzas["price"] < 600)
let mensaje
if (barato === undefined){
    mensaje = "No existen pizzas de menos de $600"
} else mensaje = `La ${barato.name} vale menos de \$600`

console.log(mensaje)

/*c) El nombre de cada pizza con su respectivo precio.*/
const menu = pizzas.forEach((pizzas) =>{
    console.log(`La ${pizzas.name } tiene un precio de \$${pizzas.price}`)
})


/*d) Todos los ingredientes de cada pizza (En cada iteraci贸n imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.*/
const ingredientes = pizzas.forEach((e) =>{
    console.log(`Los ingredientes de la ${e.name} son:`);
    e.ingredients.forEach((i) => {
        console.log(i);
    })
})

/*TODAS  las respuestas deben ser USER-FRIENDLY. 
Si (como en el punto B), la respuesta es un booleano (true o false), no imprimir el booleano , imprimir en consola una respuesta que toda persona pueda entender, sepa o no de programaci贸n (Es decir, no podemos imprimir un array o un objeto en consola, por ejemplo.). 
Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

Por ejemplo: "La pizza X, tiene un valor de $XXXX鈥?. 馃捀*/