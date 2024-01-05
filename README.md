
# Project 1: Subscriptions based system with array of object

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

