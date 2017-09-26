//business logic

function BankAccount (name, initialDeposit, deposits, withdrawals) {
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
  var accountType = $("#selectAccount").val();
  var name = $("input#yourname").val();
  var accountName = name + " " + accountType;
  var initialDeposit = parseInt($("input.initial-deposit").val());
  });
  $("form-group#submit").submit(function(event) {
  this.deposits.push(parseInt($("input.deposit").val()));
  this.withdrawals.push(parseInt($("input.withdrawal").val()));
  var newAccount = new BankAccount (this.initialDeposit, this.deposits, this.withdrawals);
 $(".BankAccount").last().click(function() {
  $("#transactions").text(
  });
});
