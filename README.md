NOTES TO SELF:

//Playground for vizualization - https://www.cs.usfca.edu/~galles/visualization/Heap.html

  When it comes to Min/MaxHeaps the *key secret is understanding the clearly dichotomization in left and right*
and the *implicit multiplicity with 2*, *respectively 2+1*(to the floor of the result). Therefore to determine 
the parent node by reverse dividing to 2. All this has to be in accordance with 
the index(position) of the wanted item.

  Ex. [null,1,3,6,7,8,9,12] will be represented as:
        1
       3 6
     7 8 9 12
left child of 3 will be on position 2*2(the position of 3), therefore it will be 7, add 1 and you'll have the right children;
