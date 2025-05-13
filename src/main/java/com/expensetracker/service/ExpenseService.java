package com.expensetracker.service;

import com.expensetracker.model.Expense;
import com.expensetracker.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service                                    // 1️⃣
public class ExpenseService {

    @Autowired                              // 2️⃣
    private ExpenseRepository expenseRepository;

    // 3️⃣ Retrieve all expenses from the database
    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }

    // 4️⃣ Find a specific expense by ID
    public Optional<Expense> getExpenseById(Long id) {
        return expenseRepository.findById(id);
    }

    // 5️⃣ Save a new expense or update an existing one
    public Expense saveExpense(Expense expense) {
        return expenseRepository.save(expense);
    }

    // 6️⃣ Delete an expense by ID
    public void deleteExpense(Long id) {
        expenseRepository.deleteById(id);
    }
}