// https://calculator.swiftutors.com/ending-inventory-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const endingInventoryRadio = document.getElementById('endingInventoryRadio');
const beginningInventoryRadio = document.getElementById('beginningInventoryRadio');
const purchasesRadio = document.getElementById('purchasesRadio');
const costOfSalesRadio = document.getElementById('costOfSalesRadio');

let endingInventory;
let beginningInventory = v1;
let purchases = v2;
let costOfSales = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

endingInventoryRadio.addEventListener('click', function() {
  variable1.textContent = 'Beginning Inventory';
  variable2.textContent = 'Purchases';
  variable3.textContent = 'Cost of Sales';
  beginningInventory = v1;
  purchases = v2;
  costOfSales = v3;
});

beginningInventoryRadio.addEventListener('click', function() {
  variable1.textContent = 'Ending Inventory';
  variable2.textContent = 'Purchases';
  variable3.textContent = 'Cost of Sales';
  endingInventory = v1;
  purchases = v2;
  costOfSales = v3;
});

purchasesRadio.addEventListener('click', function() {
  variable1.textContent = 'Ending Inventory';
  variable2.textContent = 'Beginning Inventory';
  variable3.textContent = 'Cost of Sales';
  endingInventory = v1;
  beginningInventory = v2;
  costOfSales = v3;
});

costOfSalesRadio.addEventListener('click', function() {
  variable1.textContent = 'Ending Inventory';
  variable2.textContent = 'Beginning Inventory';
  variable3.textContent = 'Purchases';
  endingInventory = v1;
  beginningInventory = v2;
  purchases = v3;
});


btn.addEventListener('click', function() {
  
  if(endingInventoryRadio.checked)
    result.textContent = `Ending Inventory = ${computeEndingInventory().toFixed(2)}`;

  else if(beginningInventoryRadio.checked)
    result.textContent = `Beginning Inventory = ${computeBeginningInventory().toFixed(2)}`;

  else if(purchasesRadio.checked)
    result.textContent = `Purchases = ${computePurchases().toFixed(2)}`;

  else if(costOfSalesRadio.checked)
    result.textContent = `Cost of Sales = ${computeCostOfSales().toFixed(2)}`;
})

// calculation

function computeEndingInventory() {
  return Number(beginningInventory.value) + Number(purchases.value) - Number(costOfSales.value);
}

function computeBeginningInventory() {
  return Number(endingInventory.value) - Number(purchases.value) + Number(costOfSales.value);
}

function computePurchases() {
  return Number(endingInventory.value) - Number(beginningInventory.value) + Number(costOfSales.value);
}

function computeCostOfSales() {
  return Number(beginningInventory.value) + Number(purchases.value) - Number(endingInventory.value);
}