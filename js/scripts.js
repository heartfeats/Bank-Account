//business logic
function Bank (name, initialDeposit) {
  this.name = name;
  this.initialDeposit = initialDeposit;
};

Bank.prototype.withdrawlFunds = function (initialDeposit,withdrawlAmount) {
  return this.initialDeposit - this.withdrawlAmount;
}

function resetFields() {
  $("input.initial-deposit").val("");
  $("input.deposit").val("");
  $("input.withdrawal").val("");
};

//user logic
$(document).ready(function() {
  var userName = $("input#yourname").val();
  var initialDeposit = parseInt($("input.initial-deposit").val());
}
