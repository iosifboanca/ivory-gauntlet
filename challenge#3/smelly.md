*Data structures used:*

let customer = {
  name : '',
  rentals: [{movieID, days}]
}
movies = [{movieID: {title, code}}] 
movies.code = [[regular, new, childrens...]

*What does this program do?*

This seems to be an accountancy alogrighm for a movie rental company. It will output a receipt with the name of the customer, the amount of cash owned and the fidelity points obtained. 
It is important to state clearly the intention in order to have the purpose of the transaction.

*First impression after reading the code:*

THE NAME OF THE FUNCTION - This is incredibly wrong! Also, there are some vague naming of some variables(they make sense only with the full context - eg. 'totalAmount'[of what?] which represents the final amount of money which is to be paid could have had a more explicit name or frequentRenterPoints which represents the quantum of fidelity points in a discount system [maybe?]) and so forth...

Letting apart the naming, data structuring could have been a little more clear. The final clustering presented in the begining of the document is the combined work after several re-readings and questioning if 'it is an array of arrays with an object or it makes more sense to be an array of objects with objects in it?' type of question (eg. the argument movies). It's also the fact that I am still a newbie in this field which has to be taken into consideration, but as far as I documented about this task, I discovered that keeping it 'stupidly simple and clear' its a way to go.

When it comes to the logic of the code there are some generally accepted good practices which are missing in here. The main functionalities are not immediatly deductible but are to be revealed. It can subscribe into category of a 'Big ball of mud' kind of structure anti-pattern. 
Besides there are some code aberations.
eg. code line in the swtich case 'childrens' have the 'thisAmount'(the price) assigned value of 1.5 per unit - if the amount of days is above 3, then the price adds 1.5 money units per day whereas if it's, let's say 2 or 3, the unit price per day will be either 0.75 or 0.5; 

...more to be added tomorrow