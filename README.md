Fittrick – Smart Home Finance Management System

 Overview

Fittrick is a modern web-based home finance management application designed to help users efficiently track and manage their income, expenses, and overall financial activity.

The application provides a clear dashboard view, categorized transaction tracking, and an integrated chatbot assistant to guide users in making better financial decisions.
 Key Features

### 1. Dashboard

The dashboard provides a complete overview of the user's financial status. It includes:

* Total Balance across all accounts
* Total Income
* Total Expenses
* Net Savings

It also displays:

* Cash flow analysis (last 6 months)
* Category-wise spending visualization

---

2. Transaction Management

Users can manage all their financial activities through the transactions module.

Features:

* Add income and expense entries
* Filter transactions (All, Income, Expenses)
* View transaction details such as:

  * Date
  * Description
  * Category
  * Account
  * Amount

Transactions are clearly differentiated using positive and negative values for better readability.

---

3. Category-wise Spending

All expenses are grouped into categories such as:

* Food
* Transport
* Entertainment
* Utilities
* Education

This helps users analyze spending patterns and identify areas where they can reduce expenses.


### 4. Bank Account Simulation

The application includes a simulated account system:

* Users can manage different account types (Checking, Savings, Wallet, Credit Card)
* Transactions are linked to specific accounts
* Balance updates dynamically based on income and expenses

---
 5. Chatbot Assistant (Innovative Feature)

Fittrick includes a built-in chatbot that provides financial guidance.

Capabilities:

* Suggests ways to reduce spending
* Alerts users about overspending
* Provides simple budgeting advice

This feature enhances user interaction and adds an intelligent layer to the system.

 Technologies Used

### Frontend

* **Next.js**
  Used as the primary React framework for building the application with efficient routing and performance optimization.

* **React.js**
  Used for creating reusable UI components and managing application state.

* **JavaScript (ES6+)**
  Core language used for implementing all logic, calculations, and interactivity.

* **Tailwind CSS**
  Utility-first CSS framework used to design a clean, responsive, and modern user interface.

* **shadcn/ui**
  Component library used for pre-built UI elements such as buttons, cards, inputs, and layout components.

*Radix UI**
  Underlying accessibility-focused component primitives used by shadcn/ui.


### Data Storage

LocalStorage (Browser-based storage)**
  Used to store:

  * Transaction data
  * Account details
  * User financial records

This eliminates the need for a backend and allows the application to run entirely on the client side.

 Data Visualization

* **Chart Library (e.g., Chart.js / Recharts)**
  Used to display:

  * Cash flow trends
  * Category-wise spending charts

 Chatbot Implementation

* **JavaScript-based Rule Logic**
  The chatbot is implemented using conditional logic to:

  * Analyze spending patterns
  * Generate suggestions
  * Provide financial alerts


 Application Architecture

 Folder Structure

/app or /pages

* Dashboard page
* Transactions page
* Accounts and categories pages

/components

* Dashboard cards
* Transaction table
* Charts
* Chatbot component

Data Flow

1. User adds transactions or account details
2. Data is stored in LocalStorage
3. Dashboard retrieves and processes data
4. Calculations are performed for totals and savings
5. Data is visualized using charts
6. Chatbot analyzes data and provides suggestions

 Balance Calculation

Total Balance = Total Income - Total Expenses

 Net Savings

Net Savings = Income - Expenses

 Transaction Handling

* Income is added to balance
* Expenses are subtracted from balance

 Category Aggregation

* Transactions are grouped by category
* Total spending per category is calculated

 Innovation

The main innovation in Fittrick is the integration of a **chatbot assistant** within a finance tracking system.

Instead of only displaying data, the system:

* Interprets financial behavior
* Provides suggestions
* Encourages better financial habits



 Limitations

* No real bank API integration (uses simulated accounts)
* Data is stored locally and not synced across devices
* Chatbot is rule-based and not powered by advanced AI


 Future Enhancements

* Integration with real banking APIs
* AI-powered chatbot using machine learning
* User authentication system
* Cloud database integration (Firebase / MongoDB)

 Conclusion

Fittrick is a simple yet powerful financial management tool that demonstrates how modern web technologies can be used to build an interactive and insightful personal finance system.

