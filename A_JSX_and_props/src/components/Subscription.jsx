import '../subscription.css';
import SubscriptionDate from './SubscriptionDate';


// const Subscription = () => {
//     let date = (new Date('2023','03','23'));
//     let title = "Monthly Subscription";
//     let amount = '125.60';

//     return (
//         <>
//             <div className="subscription">
//                 <div>{date.toISOString()}</div>
//                 <h2>{title}</h2>
//                 <h3>{amount}</h3>
//             </div>
//         </>
//     )
// }


// reusable component for multiple type of subscriptions:
// const Subscription = (props) => {
//     return (
//         <>
//             <div className="subscription">
//                 <div>{props.date.toISOString()}</div>
//                 <h2>{props.title}</h2>
//                 <h3>{props.amount}</h3>
//             </div>
//         </>
//     )
// }

// further optimizing the props by destructuring it and give the default values:

// const Subscription = ({date = new Date('2023','03','23'), title, amount}) => {

//     const month = date.toLocaleString('default',{month:'long'});
//     const day = date.toLocaleString('default',{day:'2-digit'});
//     const year = date.getFullYear();

//     return (
//         <>
//             <div className="subscription">
//                 <div className="subscription-date">
//                    <span>{day}-</span>
//                    <span>{month}-</span>
//                    <span>{year}</span>
//                 </div>
//                 <h2 className="subscription-title">{title}</h2>
//                 <h3 className="subscription-amount">{amount}</h3>
//             </div>
//         </>
//     )
// }

// seperating the logic of the date in SubscriptionDate component:

const Subscription = ({date, title, amount}) => {
    return (
        <>
            <div className='subscription'>
                <div className='subscription-date'>
                    <SubscriptionDate date = {date} />
                </div>
                <h2 className='subscription-title'>{title}</h2>
                <h3 className='subscription-amount'>{amount}</h3>
            </div>
        </>
    )
}

export default Subscription;

