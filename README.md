# Front End Repo:

project description and details docs: https://docs.google.com/document/d/1sHcPVtCp5pJzraJH8rcgD-DypXiAkMxOCSsTaCRN1_w/edit

Search Page Heroku: https://petfindersearch.herokuapp.com/

Introduction
Petfinder is a crowd-sourced website for the users to search for a missing pet or report a missing pet. We used the combination of ReactJS and ReduxJS framework on frontend; used Spring Boot framework on backend that supports RESTful web service; and used MySQL as our database.


Project Organization
Project Members:
Meng Wang/wang.meng1@northeastern.edu
Yixuan Liao/liao.yi@northeastern.edu
Rui Chao/chao.r@northeastern.edu


Requirements

Business Requirements 

This web application is intending to solve objective problems facing pet owners and stray animals.

For the pet owner’s side: Efficiency for looking for missing pets, efficiency in adopting an animal, and reporting a missing pet.
For the stray animals: Find a lovely home and get connected to the owner.


User Requirements

Petfinder provides user management functionality that allows users to register, login, logout, and visit their profile, and search/report missing animals. The navigation adapts depending on whether a user is logged in or not, and depending on their role in the application. There are two types of users or roles. A user can be a regular user or an admin. 
The user interface adapts to the user role by hiding certain links, or entire pages and functionality. For instance, The Admin will have access to the administration page that would otherwise be inaccessible to the rest of the users of the application. The use cases for the two types of users are different to warrant different user interfaces. However, the login, register, and some profile content will stay the same interface.


Functional Requirements

Home-Page (Web application presenting)
SignUp-Page(Register as user)
Login-Page(Access in personal information)
Profile-Page(View and modify information)
Search-Page(Function implemented for search usage)
SearchResult-Page(Function implemented for search usage)
PostTable-Page(Function implemented for user edit/update/delete/create)

Implementation Requirements
Implementation: ReactJS,ReduxJS, SpringBoot, JavaScript, Java,HTML/CSS,MySQL

