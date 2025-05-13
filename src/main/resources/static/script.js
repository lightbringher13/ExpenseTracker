// 🌟 Fetch All Expenses
function fetchExpenses() {
    fetch('http://localhost:8080/api/expenses')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#expenseTable tbody');
            tableBody.innerHTML = "";
            data.forEach(expense => {
                const row = `<tr>
                    <td>${expense.id}</td>
                    <td>${expense.title}</td>
                    <td>${expense.amount}</td>
                    <td>${expense.category}</td>
                    <td>${expense.date}</td>
                    <td>
                        <button onclick="deleteExpense(${expense.id})">Delete</button>
                    </td>
                </tr>`;
                tableBody.innerHTML += row;
            });
        });
}

// 🌟 Add New Expense
document.getElementById('expenseForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const expense = {
        title: document.getElementById('title').value,
        amount: parseFloat(document.getElementById('amount').value),
        category: document.getElementById('category').value,
        date: document.getElementById('date').value
    };

    fetch('http://localhost:8080/api/expenses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(expense)
    }).then(response => response.json())
      .then(data => {
          fetchExpenses(); // Refresh the table
          document.getElementById('expenseForm').reset();
      });
});

// 🌟 Delete Expense
function deleteExpense(id) {
    fetch(`http://localhost:8080/api/expenses/${id}`, {
        method: 'DELETE'
    }).then(() => fetchExpenses());
}

// 🌟 Load the table on page load
fetchExpenses();