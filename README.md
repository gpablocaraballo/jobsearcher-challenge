#############################################################
# Challenge employment searcher - Pablo Caraballo
nextjs + typescript + react context + styled-components + jest/react-testing-library + others (axios + lodash)

_Deploy:_ 
_https://jobsearcher-challenge.vercel.app/_

_api endpoints:_ 
_https://jobsearcher-challenge.vercel.app/api/jobs_
_https://jobsearcher-challenge.vercel.app/api/categories_
_https://jobsearcher-challenge.vercel.app/api/recommendations_


### INSTRUCTIONS STEPS 📋


_1 . Install the dependencies on the project root folder_

```
npm install
```

_2 . start the app_

```
npm run dev
``` 

_3 . for testing_

```
npm run test
``` 

## General view

_Main page_
```
    pages/jobs/index.js (Contains the context provider and the main component like AppLayout, this is reused in all pages and also contains the Header component for example)

    pages/jobs/[id].js (Job detail)

```
```
_Main components_

```
    AppLayout: It is used in all pages, is always loads the Header component:

    Header: Always is loaded, contains the favorites component to see a simple list

    Filters: Is in charge to make requests with the category param based on the select/combo, also we have
             the Remote checkbox to filters locally.
    
    MainContainer: In the main home, we use this component, inside we can found the list of jobs, making the request
    and then we set this into the context. The JobList use this state management.

    Modal: Just a simple modal to see the favorites.

    JobDetail: Used to navigate into the job detail (pages/jobs/[id].js)
 
    JobList: Very useful component, its reused in to sectors, one is the main home page place to show all jobs and
    if we change the category its trigger the ajax request and update the context triggering the reducers.

    JobList/JobOperations: Contains the actions to add to favorites or remove it from storage.
.
 ```

```
    libs: In this directory we can find tools like context-lib, reducer and actions. 
    
    libs\context-lib.js - react context api
    libs\models.js - Typescript interfaces, enum and related collections.
    libs\reducer-lib.js - used when dispatch is triggered.
    libs\reducerAction-lib.js - ACTIONS used by reducers.
    libs\services.js - all functions to make requests.
    libs\theme.js - some values to reuse with styled components (styled has it own theme provider, to this challenge we use a simpler approach)
```

```
    .env: backend urls.
```

```
    Testing: For demo purpose only:
    components/JobList/Item.test.tsx with some asserts
```

```
    Mock data: we use the json example.
```

```
    State management: We use react context api.
```

```
    IMPORTANT :) ->State management/localStorage: We use react context for the jobs and filters applied, 
    but for favorites/wish list is stay preserved in window.localStorage, so if we reload the page, the favorites
    is gonna exists anyway :)
    others observations: I saw a few things: 
    * the mock/json example did not have some fileds, 
    * does not have logo of the companies (i added some randoms)
    * some fields are with nulls
    * i dont see the company name field
    so in general i try to show some fields to get the idea, i dont show everything, because is a demo purpose so i think that for understanding the flow the fields on the UI are good enough i believe.
```