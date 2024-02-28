---
layout: ../../layouts/MarkdownPostLayout.astro

title: '🗺️ Linear & Binary search'
pubDate: 2023-02-26
description: 'Linear & Binary search'
author: 'Dani Sanchez'
image:
    url: '/imgs/article-02.jpg' 
    alt: ''
tags: ["astro", "blogging", "learning in public"]
---

Actualmente sigo estudiando el libro <i class="italic">“A Common-Sense Guide to Data Structures and Algorithms”</i> y uno de los primeros temas que trata son las <b>búsquedas en listas de datos</b>.

Es un tema básico, lo sé. Pero el autor lo expone para hacerle ver al lector la importancia del algoritmo y la estructura de datos que decide utilizar.

En este artículo me gustaría dar una pequeña introducción a <i class="italic">linear search</i> y <i class="italic">binary search</i> y qué ventajas aportan.

<div class="little-separator-main-dps">
    <hr />
    <hr />
    <hr />
</div>

# Un poco de contexto
Primero de todo, comprender las dos estructuras de datos que vamos a mencionar en el artículo.

## Arrays y Array-based Sets.
### Array
- Lista de datos.
- Pueden estar ordenados o no.
- No tienen porqué ser únicos.

<img src="/imgs/article-02/01.png" alt="01" />

### Array-based Set
- Lista de datos.
- Ordenados.
- Únicos.

<img src="/imgs/article-02/07.png" alt="07" />

Para poder efectuar una <i class="italic">binary search</i>, es necesario que los elementos de la lista sean únicos y están <b>ordenados</b>.

<div class="little-separator-main-dps">
    <hr />
    <hr />
    <hr />
</div>

## Linear search

Supongamos que queremos buscar el número ‘80’ en el array anteriormente expuesto.

<img src="/imgs/article-02/02.png" alt="02" />

El sentido común hace que vayamos elemento a elemento y nos preguntemos si es el número ‘80’.

1. Primer elemento. ¿Tiene como valor ‘80’? No, es ‘10’. 
2. Continúo con el siguiente. ¿Tiene como valor ‘80’? No, es ‘40’. 
3. Continúo con el siguiente, etc…

<img src="/imgs/article-02/03.png" alt="03" />

Finalmente, en el elemento cuyo índice es 5, encontraremos el número ‘80’. Con esto habremos terminado la búsqueda y el programa podrá proseguir con otras tareas.

Esto en listas con pocos elementos es aceptable, pero si por ejemplo, tenemos 10000 elementos, sería una locura. Tendríamos que revisar, en el peor de los casos, <b>toda la longitud del array</b>.

En términos de <b>Big O</b>, estaríamos hablando de <b>O(N)</b>, la búsqueda sería tan larga como elementos tuviera la lista. A esta complejidad se le conoce también como <i class="italic">linear time</i>.

<img src="/imgs/article-02/04.png" alt="04" />

Para evitar este problema, existe la <b>búsqueda binaria</b>, o <i class="italic">binary search</i>.

<div class="little-separator-main-dps">
    <hr />
    <hr />
    <hr />
</div>

## Binary Search

La <b>búsqueda binaria</b> es un algoritmo de búsqueda que consiste en ir descartando conjuntos de valores. Estos al estar ordenados, permiten asegurar que si, por ejemplo, buscamos el elemento de la lista cuyo valor es ‘80’, podamos descartar todos aquellos que sean menores a ‘80’. Insisto, al estar <b>ordenados</b>, es relativamente sencillo.

<img src="/imgs/article-02/05.png" alt="05" />

Dada la siguiente lista, queremos buscar el elemento cuyo valor es ‘23’.

La búsqueda binaria consta de los siguientes pasos:

1. Partimos la lista por la mitad. El elemento cuyo índice es 4 marca la mitad, su valor es ‘16’. ¿‘16’ es menor que ‘23’? Nos quedamos con la segunda mitad.
2. Volvemos a partir la lista por la mitad. El elemento cuyo valor es ‘56’ marca la mitad. ¿’56’ es mayor que ‘23’?. Nos quedamos con la primera mitad.
3. Volvemos a partir la lista por la mitad. Justo el elemento que marca la mitad tiene como valor ‘23’. El elemento coincide con el valor que estamos buscando. Devolvemos 5, el índice del elemento cuyo valor es ‘23’.

Como se puede apreciar, este algoritmo es increíblemente más rápido que la búsqueda lineal.
En términos de Big O sería <b>O(log N)</b>, también llamado <i class="italic">logarithmic time</i>.

<img src="/imgs/article-02/06.png" alt="06" />

Un algoritmo cuya <i class="italic">time complexity</i> es de <b>O(log N)</b>, significa que tomará tantos pasos como sea necesario para seguir reduciendo a la mitad los elementos hasta que nos quedemos con uno solo.

Revisando otra vez en detalle la búsqueda binaria es justamente lo que estamos haciendo. Partir la lista de elementos hasta dar con el elemento deseado.

<div class="little-separator-main-dps">
    <hr />
    <hr />
    <hr />
</div>

# Big O Notation

Más adelante me gustaría indagar en profundidad sobre Big O.

Por ahora, una pequeña comparativa:

<img src="/imgs/article-02/08.png" alt="08" />

Y aquí algunos datos recogidos de diferentes pruebas, en base a un número de elementos y el número de pasos o <i>steps</i> que el algoritmo realiza:

<table>
    <thead><tr><th>Núm. Elementos</th><th>O(N)</th><th>O(log N)</th></tr></thead
    ><tbody
        ><tr><td>8</td><td>8</td><td>3</td></tr><tr
            ><td>16</td><td>16</td><td>4</td></tr
        ><tr><td>32</td><td>32</td><td>5</td></tr><tr
            ><td>64</td><td>64</td><td>6</td></tr
        ><tr><td>128</td><td>128</td><td>7</td></tr><tr
            ><td>256</td><td>256</td><td>8</td></tr
        ><tr><td>512</td><td>512</td><td>9</td></tr><tr
            ><td>1024</td><td>1024</td><td>10</td></tr
        ></tbody>
</table>


Mientras <b>O(N)</b> toma tantos pasos como elementos haya, <b>O(log N)</b> solo toma uno más cada vez que los elementos se duplican.

<div class="little-separator-main-dps">
    <hr />
    <hr />
    <hr />
</div>

Esto es todo por ahora, espero que hayas disfrutado de esta pequeña introducción a ciertos algoritmos de búsqueda y a Big O.

Dejo también la URL a mi repo donde voy publicando los algoritmos, https://github.com/danisanga/java-performance-tests. 

Estoy trabajando en una solución que permita medir la <i class="italic">performance</i> de cada uno de ellos (simplemente a nivel orientativo).


<style>
    .little-separator-main-dps {
        margin: 3rem 0;
        display: flex;
        justify-content: center;
    }
    hr {
        border: none;
        background: #fcb955;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        margin: 0 0.325rem;
    }
    .text-gradient {
        background-image: var(--accent-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 400%;
        background-position: 0%;
    }
    b, .italic {
        color: #fcb955;
    }
    img {
        max-width: 100%;
        max-height: 100%;
    }
    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
        padding: 0.5rem;
    }
</style>