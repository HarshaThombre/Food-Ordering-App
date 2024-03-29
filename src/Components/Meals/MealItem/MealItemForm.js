import {useRef,useState} from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
const MealItemForm = props=>{
    const amountInputRef =useRef();
    const [amountIsValid, setAmountIsValid]=useState(true);
    const submitHandler=(event )=>{
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber= +enteredAmount;
        
        if(enteredAmount.trim().length<=0 
        || enteredAmountNumber < 1 
        || enteredAmountNumber > 5)
        {
            setAmountIsValid(false);
                return;
        }
        props.onAddToCart(enteredAmountNumber);
    }
return(
    <form className={classes.form} onSubmit={submitHandler}>
        <Input 
        ref={amountInputRef}
        label="Quantity" 
        input={{
            
            id:'quantity',
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }}/>
        <button className={classes.button}>+ Add</button>
        {!amountIsValid && <p>Please enter valid amount</p>}
    </form>
);
}

export default MealItemForm;