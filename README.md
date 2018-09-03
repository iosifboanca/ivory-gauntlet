SUMMARY MENTIONS 

Due to the lack of previous experience with or comprehensive understanding of what *data strctures* are or how they interfere with programming, this project may contain more than one data structure presented, at the end, only one will be selected to be presented as representative, at the choice of the developer. 
This process was created more for the process of learning other than having a final product to present. This is purely facultative and represents a non-official, non-related to initial instructions incursion and it has no expectations to be percieved on the top the selected item to be presented. Therefore, the reader is kindly asked to ignore the surplus and to get directly to the point of interest. Thank you!

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