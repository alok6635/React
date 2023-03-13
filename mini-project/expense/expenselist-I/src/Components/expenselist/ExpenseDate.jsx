import './ExpenseDate.css'

function ExpenseDate(props){
    let month = props.date.toLocaleString('en-US',{month:'long'});
    let year =props.date.getFullYear();
    let date = props.date.toLocaleString('en-US',{month:'2-digit'});
    
return(
    <div className='exp_time'>
    <div>{date}</div>
    <div>{month}</div>
    <div>{year}</div>
    </div>
 )   
}

export default ExpenseDate;