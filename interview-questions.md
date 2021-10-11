# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Are (most) Ruby methods accessors or mutators?

  Your answer: Most Ruby method are accessors! They can be converted to mutators by adding ! after the method. 
  for example: my_name = sahtra
               p my_name --> "sahtra"
               my_name.capitalize()!
               p my_name --> "Sahtra

  Researched answer: Most ruby methods are accessors. This means they do not alter the original data the method was called upon. If you wanted a method to alter the data, you would turn your method into a mutator by adding the bang operator to the end of the method. This will override the original data given. If you decide you wish to preserve the original data but still want to mutate it, you can declare a new variable equal to the original data with the method of your choice.



2. What is a block in Ruby?

  Your answer: a block in Ruby is an anonymous function! I believe they contain the code functionality that can be passed to a method.

  Researched answer: in Ruby, a code block is a group of code that is always written between keywords do and end or curly braces that will be passed to a method. When using do to create your method it is absolutely required to include end when you finish your code block. Forgetting to add your end will cause errors in your code as it reads everything after your 'do' as if it were still part of the block. 



3. What is a gem?

  Your answer: a gem is a pre-packaged set of code distributed by the gem package manager. A gem we've practiced using before is RSpec! it's very similar to javascript's jest.

  Researched answer: A gem is a packaged ruby application or library that can be used to extend or modify the functionality of ruby. There are many different gems available and you can even create your own! Ruby gems are typically open-source, meaning that they are free to use and contribute to!



4. What is a relational database? Are there other kinds of databases?

  Your answer: A relational database is a spreadsheet of sorts. It's full of data that have some sort of relation to each other. There absolutely are other kinds of databases! I don't know exactly how many off the top of my head but I know they exist!

  Researched answer: A relational database is a database that stores data points that are related to one another. In a relational database, every row in a table has it's own unique identifier known as a primary key. Other kinds of databases include cloud databases, commercial databases, centralised databases, and operational databases. Each database has it's pros and cons depending on the type of data you are working with.



5. What are primary keys? Why are they important?

  Your answer: Primary keys are unique identfiers for distigushing instances from each other. They're important because you could have multiple instances with the same name that could easily be confused for each other. Primary keys allow for every instance to be accounted for as the correct instance without confusion.

  Researched answer: A primary key is a special column that contains a value that uniquely identifies each row of a table. Each table can only have a single primary key. Did you know we've seen examples of primary keys are our daily lives? Social Security numbers, Postal codes, and even your bank account's routing number are some unique identifiers that we already live with!



## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: REpresentational State Transfer is what the REST stands for. A RESTful route is a pattern that makes it easier for develops to create unique routes for users to understand what is happening in the web page they are using. 

2. JSON: Stands for JavaScript Object Notation. JSON is a light-weight data-interhange format that easy very human friendly in terms of reading and writing. JSON is a text format that is completely language independent. It is built on two structures that include objects and arrays respectivly.

3. ERB: Stands for Embedded Ruby. an erb is typically an HTML file with Ruby code embedded in. Looks to be common with rails!
<!-- I really hope this doesn't actually mean epic rap battles...  -->
4. Params: Parameters! Params are kinda similar to a hash. It returns an ActionController::Parameters object. It looks pretty cool. I think I'll enjoy these.
<!-- I should really seperate my search histories... I'm getting articles for modding CS:GO through steam -->

5. API: Application Programming Interface. APIs are the ultimate software communication tool. Are you wanting specific data? API can get you there! It's like the receptionist of information on the internet.
