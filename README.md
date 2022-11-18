# Lab 8 - Starter

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

2.  Within a Github action that runs whenever code is pushed 
3.  Manually run them locally before pushing code
4.  Run them all after all development is completed


Answer: 
1.  Within a Github action that runs whenever code is pushed 
Explanition:
GitHub Actions not only allows developers to host code on the platform, but also to manipulate it. GitHub Actions helps increase productivity by automating a cross-team, manual, and error-prone process that allows each team to operate independently. Continuous integration consists of a number of operations, such as grabbing code, running tests, logging into remote servers, publishing to third-party services, etc. GitHub refers to these operations as actions. By using github Actions, it would make the most sense to run the automated tests whenever we push code so that we can ensure that any new changes don't break the app later down the road.