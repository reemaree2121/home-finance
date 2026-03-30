// ==================== DATA ====================
let currentUser = null;
let transactions = [];        // Starts completely empty
let budgets = [];
let savingsGoals = [];

const categories = {
  income: ["Salary", "Freelance", "Rent Received", "Business", "Gift", "Others"],
  expense: ["Food", "Rent", "Utilities", "Transport", "Shopping", "Bills", "Medical", "Entertainment", "Others"]
};

// ==================== AUTH ====================
function login() {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();

  if (!username || !password) {
    alert("Please enter both username and password");
    return;
  }

  currentUser = { name: username };
  
  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("main-app").classList.remove("hidden");

  // Show username in navbar
  document.getElementById("username-display").textContent = username;
  document.getElementById("user-avatar").textContent = username.charAt(0).toUpperCase();

  loadData();
  showPage(0);
}

function logout() {
  if (confirm("Do you want to logout?")) {
    currentUser = null;
    document.getElementById("main-app").classList.add("hidden");
    document.getElementById("login-screen").classList.remove("hidden");
    // Clear inputs for next login
    document.getElementById("login-username").value = "";
    document.getElementById("login-password").value = "";
  }
}

// ==================== DARK MODE ====================
function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");
}

// ==================== PAGE NAVIGATION ====================
function showPage(page) {
  const content = document.getElementById("page-content");
  document.querySelectorAll("a").forEach(a => a.classList.remove("nav-active"));
  document.getElementById("tab-" + page).classList.add("nav-active");

  if (page === 0) content.innerHTML = getDashboardHTML();
  else if (page === 1) content.innerHTML = getIncomeHTML();
  else if (page === 2) content.innerHTML = getExpenseHTML();
  else if (page === 3) content.innerHTML = getBudgetsHTML();
  else if (page === 4) content.innerHTML = getSavingsHTML();
  else if (page === 5) content.innerHTML = getReportsHTML();
}

// ==================== DASHBOARD ====================
function getDashboardHTML() {
  let income = transactions.filter(t => t.type === "income").reduce((sum, t) => sum + t.amount, 0);
  let expense = transactions.filter(t => t.type === "expense").reduce((sum, t) => sum + t.amount, 0);
  let balance = income - expense;

  return `
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div class="bg-white dark:bg-gray-800 p-6 rounded-3xl card-hover">
        <p class="text-gray-500">Total Balance</p>
        <p class="text-4xl font-bold mt-2">₹ ${balance.toLocaleString('en-IN')}</p>
      </div>
      <div class="bg-white dark:bg-gray-800 p-6 rounded-3xl card-hover">
        <p class="text-gray-500">Total Income</p>
        <p class="text-4xl font-bold mt-2 text-green-600">₹ ${income.toLocaleString('en-IN')}</p>
      </div>
      <div class="bg-white dark:bg-gray-800 p-6 rounded-3xl card-hover">
        <p class="text-gray-500">Total Expenses</p>
        <p class="text-4xl font-bold mt-2 text-red-600">₹ ${expense.toLocaleString('en-IN')}</p>
      </div>
      <div class="bg-white dark:bg-gray-800 p-6 rounded-3xl card-hover">
        <p class="text-gray-500">Savings Rate</p>
        <p class="text-4xl font-bold mt-2 text-purple-600">${income ? Math.round(((income - expense)/income)*100) : 0}%</p>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="bg-white dark:bg-gray-800 p-6 rounded-3xl">
        <h3 class="font-semibold mb-4">Expense Breakdown</h3>
        <canvas id="pieChart" height="220"></canvas>
      </div>
      <div class="bg-white dark:bg-gray-800 p-6 rounded-3xl">
        <h3 class="font-semibold mb-4">Smart Insights</h3>
        <div id="ai-insights" class="space-y-3"></div>
      </div>
    </div>
  `;
}

// Continue with other functions in next message if needed.
// For full app.js with all features, reply: "Give full app.js"

alert("✅ Files updated successfully!\n\nNow the app starts completely empty.\nYou must type username & password yourself.");