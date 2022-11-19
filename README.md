# Lab 8 - Starter

# Authors: William Kim and Yuang Cui

### 1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

2.  Within a Github action that runs whenever code is pushed 
3.  Manually run them locally before pushing code
4.  Run them all after all development is completed

Answer: 
Within a Github action that runs whenever code is pushed makes most sense. By using github Actions, it would make the most sense to run the automated tests whenever we push code so that we can ensure that any new changes don't break the app later down the road.


### 2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)
Answer: 
No, E2E testing's primary goal is to ensure that the app functions properly by emulating user behavior/actions. 
E2E testing does not care how the app is composed or programmed. 


### 3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
Answer:
No. This would be more of a E2E test case since we would want to ensure that the user can send a message and the recipient successfully retrieves it. 

### 4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
Answer:
Yes, this is involved in testing the internal functionality of a single feature or unit rather than the relationship between other parts of the app. 