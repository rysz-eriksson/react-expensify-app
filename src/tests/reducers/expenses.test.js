import uuid from 'uuid';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/exenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove expenseif id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '33434'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});

test('should add new expense', () => {
    const newExpense = {
    id: '4',
    description: 'fucker',
    note: '',
    amount: 19500,
    createdAt: 0
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    }
    const state = expensesReducer(expenses, action)
    expect(state[state.length - 1]).toEqual({
        id: '4',
        description: 'fucker',
        note: '',
        amount: 19500,
        createdAt: 0
    })
});

test('should edit an expense with valid id', () => {
    const editedExpense = {
        id: '1',
        description: 'fucker',
        note: '',
        amount: 19500,
        createdAt: 0
        };
    
    const action = {
        type: 'EDIT_EXPENSE',
        id: editedExpense.id,
        updates: editedExpense
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe('fucker')
});

test('should not edit an expense with invalid id', () => {
    const editedExpense = {
        id: '1',
        description: 'fucker',
        note: '',
        amount: 19500,
        createdAt: 0
        };
    
    const action = {
        type: 'EDIT_EXPENSE',
        id: '345',
        updates: editedExpense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});