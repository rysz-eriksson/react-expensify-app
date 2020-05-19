export default (expArray) => {
    const amountArray =  expArray.map((expense) => expense.amount)
    return amountArray.reduce((acc, value) => acc + value, 0)
 };