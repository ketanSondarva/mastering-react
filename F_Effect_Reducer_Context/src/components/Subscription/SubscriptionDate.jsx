const SubscriptionDate = (props) => {
    const month = props.date.toLocaleString('default',{month:'long'});
    const day = props.date.toLocaleString('default',{day:'2-digit'});
    const year = props.date.getFullYear();

    return (
        <>
            <span>{day}-</span>
            <span>{month}-</span>
            <span>{year}</span>
        </>
    )
}

export default SubscriptionDate;



// const date = new Date('March 5, 2025 05:24:00');

// const year = date.getFullYear();
// console.log(year); // 👉️ 2025

// const month = String(date.getMonth() + 1).padStart(2, '0');
// console.log(month); // 👉️ 03

// const day = String(date.getDate()).padStart(2, '0');
// console.log(day); // 👉️ 05

// const joined = [day, month, year].join('/');
// console.log(joined); // 👉️ 05/03/2025
