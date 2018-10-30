# Angular

## Before you get started

```bash
npm i or yarn
```

your app will be running on port `4200`

**Read the schema documentation hosted [here](https://api.graph.cool/simple/v1/cj1ufizxi5lgy0109064uyi7i)**:

## TODO

* You first have to create the apolloClient in graphql.module.ts

### 1. Basic queries: Get all conferences

* Working file : app/conference/conference-card-list
* What you will learn:
  * Write a query
* Todo:
  * Use the `AllConferencesQuery` query to fetch all conferences using gql tags in `conference.apollo-query.ts`.

### 2. Basic queries: Conference details

* Working files : app/conference/conference-details, app/speaker, app/talk
* What you will learn:
  * Understand how you can add variables to your queries/mutations
  * Understand how variables are used in the query function and in the query itself
    (the id should be required)
* TODO:

  * Write a query to fetch the details of a conference (DetailedConferenceQuery
    in conference.apollo-query.ts . You will find all fields required in the
    conference-details-level.component.html and sponsor-box.component.html
  * In conference-details.component: Implement all todos :p
  * In speaker-details.component: Implement all todos :p
  * In talk-details.component: Implement all todos :p

### 3. Basic mutations: Authentication ( Register/ login button)

* Working directory: app/authentication
* What you will learn:
  * Write a basic mutation
  * Understand how variables are passed in mutations
  * Understand how the mutation is available in your component
* TODO:
  * Fix the register and login components by implementing all todos
  * You will find and write all mutations in authentication.apollo-query.ts

### 4. Advanced queries PART 1

* Working directory: app/management
* What you will learn:
  * Mixing mutations and queries in one component
  * Write a query to get the list of conferences on a particular page
  * Write a mutation to delete a conference
  * Understand how you pass variables
  * Understand how apollo passes data in a component
  * Understand pagination
  * Understand skip property
  * Understand name property
* TODO
  * In the conference-table-list component, fix all todos
  * In the conference-form component, fix all todos
  * In the add-talks-to-conference component, fix all todos

### 5. Advanced queries PART 2

* Working directory: app/management
* What you will learn:
  * Mixin mutations and queries in one component
  * Write a query to get the list of conferences on a particular page
  * Write a mutation to delete a conference
  * Understand how you pass variables
  * Understand how apollo passes data in a component
  * Understand pagination
  * Understand skip property
  * Understand name property
* TODO
  * In the talks-table-list component, fix all todos
  * In the talks-form component, fix all todos
  * In the add-speaker-to-talk component, fix all todos

### 6. Try to decouple your queries by using fragments

## Backend

* Want to see how a schema is written in nodeJS?
* Add another apolloClient to your application with the schema you will create.
* This graphQL editor enables you to create your schema and use it in your app :
* https://launchpad.graphql.com/

* The URI of your schema will be visible in the black bottom part, once you save your project.

* The only thing you have to write now, it a chat application in each conference detail.

Good luck
