# Mastering ReactJS

## Subscriptions based system with array of object

## [React Basics: JSX and props](A_JSX_and_props/src/App.jsx):

1. paasing data from parent to child component: props
2. formatting the date (JS concept)
3. destructuring the props (pros is object so it is object destructuring): `const Subscription = ({date, title, amount}) => {...}`


## [Event handling:two way binding & lifting state up](B_Event_Handling/src/App.jsx):

1. lifting state up: passing data from child to parent, passing function as props
2. Event handling: provide state variable to value attribute
3. new components: [FormSubscription](B_Event_Handling/src/components/FormSubscription.jsx) for displaying form is sub component of [NewSubscription](<B_Event_Handling/src/components/New Subsciption/NewSubscription.jsx>)  and [Filter](B_Event_Handling/src/components/Filter.jsx) for applying filter by year 

>> note: this filter logic is develop by you. there is bug: if try to add 2 new subscriptions only the latest one will be displayed. <b>you can try this</b>

## [Advanced JSX](C_Advanced_JSX/src/App.jsx):

1. fixed bug mentioned in above note (created state for array)
2. smart use of state as compare to earlier
2. conditional rendering
3. JSX operator for conditional rendering(ternary, &&) and many other things

## [Conditional return](C_Advanced_JSX_2/src/App.jsx):

1. more readable code: moving filtering logic to other component:
2. added new component: [SubscriptionList](C_Advanced_JSX_2/src/components/SubscriptionList.jsx) and returning it conditionally
3. added new button `Add new subscription` to show the 'add subscription form' and created `cancel` button to hide form, used state lifting concept in cancel (hide form) feature [click to see](C_Advanced_JSX_2/src/components/FormSubscription.jsx).

## [Dynamic styling](D_Dynamic_Styling/src/components/charts/SubscriptionChart.jsx):

1. added [SubscriptionChart](D_Dynamic_Styling/src/components/charts/SubscriptionChart.jsx) - created new array of obj called `charData` in this component which has month and value(amount) in each obj. from `filteredSubscription` App.jsx we insert value of subscription's month and amount to this array month and value.
2. added [Chart](D_Dynamic_Styling/src/components/charts/Chart.jsx) component which receives props from `SubscriptionChart` and displays [ChartBar](D_Dynamic_Styling/src/components/charts/ChartBar.jsx). `Chart` sends month and its corresponding value(height for ChartBar) to `ChartBar`
3. flow: `filteredSubscriptions` from App.jsx >> `SubscriptioChart` -> array >> `Chart` (maps) >> `CharBar` <br/>
- conlusion: this is how dynamic styling achived: on change of `filteredSubscriptions` chart will also change and it is totally dynamic, depends on the value provided in array, which we can insert from form.


## [New: Subscriber project](E_Modals_and_Refs/src/App.jsx) `complete`

1. created form @[AddSubscriber](E_Modals_and_Refs/src/components/AddSubscriber.jsx) and applying validation logic.
2. on invalid input from user displaying [error modal](E_Modals_and_Refs/src/templates/ErrorModal.jsx) conditionally.
3. study the logic of wrapping elements: [Button](E_Modals_and_Refs/src/templates/Button.jsx) for each type of button and handling their `onClick` and [Container](E_Modals_and_Refs/src/templates/Container.jsx) for global styling and wrapping element.
4. new hook `useRef()` introduced @[AddSubscriber](E_Modals_and_Refs/src/components/AddSubscriber.jsx) which is used to refer to the html element, it is like refrering to the html element like we do in JS by getElementById or querySelector. used when there is no direct UI update needed and we want to manipulate html element.
5. introduced `React portal` for that visit: @[ErrorModal](E_Modals_and_Refs/src/templates/ErrorModal.jsx) what we does for creating React portal:
    ```
    created two root ids: `backdrop-root` and `overlay-root` in index.html
    in ErrorModal.jsx:

        1.import ReactDOM from "react-dom" 
        2.ReactDOM.createPortal(
        <Backdrop onClose={props.onClose}></Backdrop>, 
        document.getElementById('backdrop-root'))
        3...portal for 'overlay-root'
    (go there and understand the logic: how we pass props and everything)
    ```

## [Hooks: Effect, Reducer and Context](F_Effect_Reducer_Context): working back to subscription project

1. Using the localstorage to save the last filtered subscription list. last applied subscription will be remain as it is even if we reload page:
2. `experiment`: When to use `useEffect`?  in [App.jsx](F_Effect_Reducer_Context/src/App.jsx) there is commented code: 
    ```
        if(localStorage.getItem('filteredYear')) {
            setFilteredYear(localStorage.getItem('filteredYear'));
        }
    ```
    this code will create infinite loop as if once true it it will re-render the state infinite times, so to avoid this we have used `useEffect()` hook. you can uncomment this code and comment code of useEffect to see the result.
3. useReducer hook introduced: we have used useReducer by replacing the useState in [FormSubscription](F_Effect_Reducer_Context/src/components/Subscription/FormSubscription.jsx)
4. created context @[subscriptions-context](F_Effect_Reducer_Context/src/components/Subscription/Context/subscriptions-context.jsx)
    - steps to create and use context:
        1. create component and create <b> const contextName = React.createContext() </b> and export it
        2. use povider to provide data to the created context: see: [App.jsx](F_Effect_Reducer_Context/src/App.jsx)
        3. consume the context by `useContext()` or `<ContextName.Providev>` wrapping tag, see: [SubscriptionList](F_Effect_Reducer_Context/src/components/Subscription/SubscriptionList.jsx) where we have replaced props with context !
        4. we can also create custom provider, see: [SubscriptionContextProvider]
        (F_Effect_Reducer_Context/src/components/Subscription/Context/SubscriptionContextProvider.jsx)
5. created [Input](F_Effect_Reducer_Context/src/components/Subscription/Input.jsx) componet that shows how we can use component resuability (not used in project, for demo purpose only)

## [Virtual Dom, useCallback and useMemo hooks](G_VD_memo_callbackHook/src/App.jsx):

1. Virtual dom: inspect the code and see how the dom tree changes itself on button click.
2. [Paragraph](G_VD_memo_callbackHook/src/components/Paragraph.jsx) component was exported with `React.useMemo()` so unnecessary child evolution get prevented.
3. [App.jsx](G_VD_memo_callbackHook/src/App.jsx): see the use of `useCallback()` which is used to prevernt the re-evaluation of the element.
4. @[Article.jsx](G_VD_memo_callbackHook/src/components/Classes/Article.jsx) class based component introduced with its lifecycle.
5. class based component are good for catching error hapens during the lifecycle of the component, we have create class based component: [ErrorBoundies.jsx](G_VD_memo_callbackHook/src/components/Classes/ErrorBoundries.jsx) which is used as wrapping element at App.jsx

## [Fullstack: fetch api, promise and async await. using fetch api retrived and added the data into mysql database ](H_Fetch_Promises_AsyncAwait/src/App.jsx) congratulation 🎉 you are fullstack dev now

1. use loading mechanism: loading while doing the api call
2. introduced error handling in both: promises and async await
3. introduced 2 methods of doing `fetch()`: get(by default) and post

## [Custom hooks and Form validation](I_CustomHooks_FormValidation/src/App.jsx):

1. [sendRequest.jsx](I_CustomHooks_FormValidation/src/hooks/sendRequest.jsx) is custom hook for fetching api, error handling and loader maintain by hook.
2. inroduced form validation @[SimpleInput.jsx](I_CustomHooks_FormValidation/src/components/SimpleInput.jsx)
3. introduced custom hook [useInput](I_CustomHooks_FormValidation/src/hooks/use-input.jsx) for validate input, maintain the all related state shown @[SimpleInput.jsx](I_CustomHooks_FormValidation/src/components/SimpleInput.jsx) and reduce complexity, see the magic @[SimpleInputUsingHook.jsx](I_CustomHooks_FormValidation/src/components/SimpleInputUsingHook.jsx).



