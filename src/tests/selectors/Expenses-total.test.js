import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/exenses';



// const total = getExpensesTotal(expenses)

test('should return 0 if no expenses', () => {
    const result = selectExpensesTotal([])
    expect(result).toBe(0)
});

test('should return correct amount if one expense', () => {
    
    const result = selectExpensesTotal([expenses[0]])
    expect(result).toBe(195)
});

test('should return correct amount for multiple expenses', () => {
    
    const result = selectExpensesTotal(expenses)
    expect(result).toBe(114195)
});