Q1. Line 12 outputs 3 becuase it prints the value of the var variable i used in the for loop. At the end of the for loop, i = 3 becuase after the last iteration of the third element in the passed array, i will be incremented to 3 and the for loop will check and see that i is not less than the length of the passed array which is 3 and exit. 
Q2. Line 13 outputs 150 which is the value of discountedPrice. discountedPrice has the value of 150 becuase it contains the value of of the original price of the last element in the prices array, 300, minus the 50% discount, which is 150. 
Q3. Line 14 outputs 150, the value of the finalPrice. finalPrice has the value of 150 becuase it takes the value of the discountedPrice, which we know is 150 from question 2 and multiplies and divides it by 100, resulting in 150. 
Q4. This function will return an array, discounted, containing original prices from the prices array applied with the discount parameter. This is because in the loop, we are iterating through the prices array, applying the discount to each price in the prices array and pushing the finalPrice containing the discountedPrice to the the discounted array. 
Q5. Line 12 causes a "i is not defined" error. This is becuase we have changed the declaration of i from var to let, meaning that the scope of i is only within the block of the for loop. Since we attempt to access i outside the for loop block on line 12, we get an error. 
Q6. Line 13 causes an error saying "discountedPrice is not defined". This is because we have changed the declaration of discountedPrice from var to let, meaning that the scope of discountedPrice is only within the for loop block. Since we attempt to access discountedPrice outside the for loop block on line 13, we get an error. 
Q7. 150 gets outputted to the terminal becuase we are simply logging the finalPrice of the last element in the prices array applied with the discount. We can access finalPrice decalred with let because we access it in the same block of code. 
Q8. This function will return an array, discounted, containing original prices from the prices array applied with the discount parameter. This is because in the loop, we are iterating through the prices array, applying the discount to each price in the prices array and pushing the finalPrice containing the discountedPrice to the the discounted array. 
Q9. Line 11 causes a "i is not defined" error. This is becuase we have changed the declaration of i from var to let, meaning that the scope of i is only within the block of the for loop. Since we attempt to access i outside the for loop block on line 11, we get an error. 
Q10. Line 12 outputs 3 to the terminal. We are logging the const variable length which is equal to the length of the prices array. In this case the length of the prices array is 3 becuase it contains 3 items. 
Q11. This function returns discounted, an array containing the corresponding original items from the passed in prices array applied with the passed in value for the discount parameter. 
Q12. 
    a. student.name 
    b. student["Grad Year"]
    c. student.greeting()
    d. student["Favorite Teacher"].name
    e. student.courseLoad[0] 
Q13. 
    A. '32' since integer 2 maps to its string representation 
    B. 1 since string 3 maps to its integer representation 
    C. 3 + null = 3 becuase integer value of null is 0 
    D. '3' + null = '3null' becuase we concatenate string conversion of null which is 'null' to '3'
    E. true + 3 = 4 because we add the integer value of true, 1, to 3 which is 4
    F. false + null = 0 because we convert false and null to their interger value which is 0 for both 
    G. '3' + undefined = '3undefined' because we convert undefined to string and concatenate it to '3'
    H. NaN because '3' gets converted to an integer but the integer value of undefined is not valid and we get NaN overall. 
Q14. 
    A. '2' > 1 is true. '2' gets converted to integer value 2 which is greater than 1. 
    B. '2' < '12' is false. We compare two strings and 2 is less than 1 alphabetically. 
    C. 2 == '2' is true. We convert '2' to integer and has the same numeric value of 2. 
    D. 2 === '2' is false. We are comparing the types which are integer and string, which is not the same. 
    E. true == 2 is false. Javascript converts true to the numerical value of 1 and compares it to 2 which they are not equal. 
    F. true === Boolean(2) is true. 2 is converted to the boolean value of true which means they are equal. 
Q15. The difference between == and === operators is that == will attempt to convert and compare operands of different types. The === operator will always consider operands of differnt types to be different and thus, false. 