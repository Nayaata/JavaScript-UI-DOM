/*
Task 1

Create a function that takes an id or DOM element and an array of contents

If an id is provided, select the element
Add divs to the element
Each div's content must be one of the items from the contents array
The function must remove all previous content from the DOM element provided

Throws if:
- The provided first parameter is neither string or existing DOM element
- The provided id does not select anything (there is no element that has such an id)
- Any of the function params is missing
- Any of the function params is not as described
- Any of the contents is neither string nor number
- In that case, the content of the element must not be changed
*/


function solve() {

  return function (element, contents) {
	  var currentElement;
	  	  
	  if (typeof(element) !== 'string' && (element instanceof HTMLElement)) {
		  throw 'Error';
	  } else if(typeof(element) === 'string') {
		  currentElement = document.getElementById(element);
	  } else {
		  currentElement = element;
	  }
  };
};