$(document).ready(function() {
  var timestamp = moment().format('MMM D, YYYY h:mm:ss A');
  $('#timestamp').html(timestamp);

  $('#bill_amount').keyup(function() {
    calculateTip();
  });

  $('#tip_percentage').keyup(function() {
    calculateTip();
  });

  function calculateTip() {
    var bill_amount = parseFloat($('#bill_amount').val());
    var tip_percentage = parseFloat($('#tip_percentage').val()) * 0.01;

    if (isNaN(bill_amount) || isNaN(tip_percentage)) {
      return;
    }

    var tip_amount = bill_amount * tip_percentage;
    var grand_total = bill_amount + tip_amount;

    $('#tip_amount').text(Number(tip_amount).toFixed(2));
    $('#grand_total').text(Number(grand_total).toFixed(2));
  }
});
