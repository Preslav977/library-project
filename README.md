# library-project

1. Result

This is the final result, the project is build using the HTML, CSS and Javascript.

2. Objective

The objectives of this project, were to build a library project, that were five different steps.

2.1. Function, that first is going to be store the objects, created from the constructor,
   and constructor with four properties. In order that function to work, i created a object
   manually and store them into the array.
2.2. Function, that creates a card that contains information about the book.
   The card is created with DOM, which allows to be created or deleted with each loop.
2.3. Creating a form that, allows the user to input into a form, after that to save that information
   creating a card. In other words when user inputs something, it will create first a object,
   after that, it will be stored into the array, and finally a card is creating to be shown into the display.
2.4. After that cards, that were created and displayed now needs to be removed from the DOM and the array,
   so when user is done reading, he can delete it and make a new one.
   The easy solution was to use data-attributes, that allows the cards to have a unique ID so can be deleted.
2.5. The final objective is, to be created a function that, allows the user to toggle a button for each book when is created,
   so the book status can be read or not read.

3. My personal objective

   My personal objective, was a definitely a fun one, it tested me on my understanding of constructor and object, even if it's
   was a small project, also i was heavily tested on DOM, so when each time a book is stored and after that removed,
   by keeping rendering the array without removing the objects by accident.

4. Notes and lessons learned

   After creating the project, i gained much more DOM knowledge, so can be transferred into the upcoming project,
   learned what is a constructor, a prototype, this as a keyword in certain situations.
   I did learn about data-attributes were so useful, that allows to put for example and id on the card when
   each is created, that was much so much easier to loop the array and find that book an delete it.
   Also learned more, how to use splice method in the array to modify the original array and to update it
   when an object is deleted.
   And about event targets of parentNode, that allows me first to see where the event is happened after that,
   to use parentNode to see where is the element to save it in a variable.
   
5. Things to improve when visiting the project

   The first thing to improve is, to make a more dynamic way of creating that object, since now i initialize the properties.
   The second is, to use prototype since i used constructor without a prototype to create these functions.
   Third is using Object.create method that creates object of the prototype, i used only new keyword in that project.
