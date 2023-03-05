# Technical questions

## 1. How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

I spent about 1,5 hours setting up the testing environment and coding the test cases. More time doing manual tests, as the API was returning 404 error.

I would add more and better designed unit tests. I would also integrate ESLint and configure custom rules.

## 2. What was the most useful feature added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

These are the new features of React 18:
https://reactjs.org/blog/2022/03/29/react-v18.html

React has a lot of interesting functionalities. Some of them are the followings:

· JSX: JSX(JavaScript Extension), is a React extension which allows writing JavaScript code that looks like HTML. In other words, JSX is an HTML-like syntax used by React that extends ECMAScript so that HTML-like syntax can co-exist with JavaScript/React code.

```sh
    <div data-testid='cutting-machines-component'>
      <h2 className="title">
        Available cutting machines:
      </h2>
      <Button data-testid='refresh-button' className={classes.button} onClick={handleRefreshButtonClick} disabled={isLoading}>
        {isLoading && <CircularProgress data-testid='loading-component' size={24} style={{ position: 'absolute' }} />}
        Refresh
      </Button>
      {errorText !== '' && <Typography className={classes.alert}>
        {errorText}
      </Typography>}
      {errorText === '' && !isLoading &&
        <TableContainer className={classes.table}>
          <Table  aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableCell}>Name</TableCell>
                <TableCell className={classes.tableCell} align="left">Manufacturer</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cuttingMachines.map((machine) => (
                <TableRow key={machine.id}>
                  <TableCell className={classes.tableCell} component="th" scope="row">
                    {machine.name}
                  </TableCell>
                  <TableCell align="left">{machine.manufacturer}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }
    </div>
```

· Each component manages the state of its data and re-renders the app based on changes to these states:

```sh
  const [isLoading, setIsLoading] = useState(true)
  const [errorText, setErrorText] = useState('')
  const [cuttingMachines, setCuttingMachines] = useState([])

  useEffect(() => {
    setTimeout(() => {
      getCuttingMachines()
      .then(response => {
        setCuttingMachines(response)
        setIsLoading(false)
        setErrorText('')
      })
      .catch(error => {
        setErrorText('Something went wrong: ' + error?.message)
        setIsLoading(false)
      })
    }, 500)
  }, [])

```

· React uses a virtual DOM, a more lightweight implementation that just generates DOM elements based on the components that you write.

## 3. How would you track down a performance issue in production? Have you ever had to do this?

First, understand what the API is doing. Configure in the system all the logs which would be useful and configure alarms according to required thresholds.

Yes, configuring alarms in AWS Cloudwatch, for example, and configuring tests in Dynatrace.

## 4. How would you improve the Lantek API that you just used?

I would add pagination.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
