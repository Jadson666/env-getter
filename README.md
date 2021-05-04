### The Problem
repeatedly writing process.env is a very inefficient way to fetch more than one environment variable
if want to default the environment variable is dev mode but not in production, use this library to assign conditional default values
***
### usage
1. **input** : pass object into first parameter
**return** whole customized process.env object
```js
import env from 'env-getter'

const { PORT, DB_NAME } = env({
  envsForDefault: ['dev','qa'],
  defaultValues: {
    PORT: 8080,
    DB_NAME: 'yourDB'
  }
})

// if PORT or DB_NAME is undefined, PORT and DB_NAME will be set to default when process.env equal to dev or qa
```

2. **input** : pass key into first parameter
**return** : `process.env[key]`, or default value if it's undefined
```js
const port = env('PORT', 8080) 
```
***
