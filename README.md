Fractals
========

This projects aims to implement and investigate trees/graphs/fractals. 

Implementation
==============

Currently all code is done using javascript with help of jQuery library. Rendering is done using HTML5 and Canvas element.

Programs are implemented using object oriented designs and a variation of MVC pattern to decouple model from view layer.

![Multiple tree fractals](https://raw.githubusercontent.com/wiki/besnik/fractals/images/tree-fractal.png)

Examples
========
 * tree_html5_canvas: contains basic implementation of binary tree fractal using javascript and html5 canvas.
 * tree_fractal_forest: same as above plus added generator to create random fractal configurations

Learning Source
===============

The sources contains couple of interesting points one can learn. Programs are not simple and clean design with aim to decouple components allowed to design simple and clean classes.

Sources shows:
 * HTML 5 Canvas manipulation and drawing
 * Vector, Matrix, Rotations, etc
 * Losely coupled object oriented design in javascript
 
Calculation
===========
Program uses basic arithmetic operations, vector and matrix multiplication and calculation of rotation matrix (rotation of vector around base).

Program uses depth-first-search of the graph (tree).

![Fractal Tree Forest](fractals/wiki/images/tree-forest.png?raw=true)

Implementation
==============
Implementation is done using object oriented design. All services are separated. Here we fully make use of dynamic language like javascript when passing config/context between services. Sometimes there is no need to create dedicated DTOs for satisfy interface but use existing DTOs/services. For target service this is transparent thanks to dynamic behaviour of the runtime.

Recursion (internally using stack of the called functions) is used to traverse tree (in depth first order) and calculate+draw branches.

