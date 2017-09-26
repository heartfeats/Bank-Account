//business logic

function BankAccount (name, initialDeposit) {
  this.name = name;
  this.initialDeposit = initialDeposit;
  this.deposits = [];
  this.withdrawals = [];
};

BankAccount.prototype.currentBalace = function(initialDeposit, deposits, withdrawals) {
  return initialDeposit + deposits - withdrawals;
}


function resetFields() {
  $("input.initial-deposit").val("");
  $("input.deposit").val("");
  $("input.withdrawal").val("");
};

//user logic
$(document).ready(function() {
  $("form-group#create").submit(function(event) {
  var userName = $("input#yourname").val();
  var initialDeposit = parseInt($("input.initial-deposit").val());
  });
  $("form-group#submit").submit(function(event) {
  this.deposits.push(parseInt($("input.deposit").val()));
  this.withdrawals.push(parseInt($("input.withdrawal").val()));
  var currentTransaction = new  (inpdeposits, withdrawals);

  });
});
