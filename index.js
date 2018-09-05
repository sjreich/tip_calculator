$(document).ready(function() {
  const timestamp = moment().format('MMM D, YYYY h:mm:ss A');
  $('#timestamp').html(timestamp);

  $('#bill_amount').keyup(function() {
    calculateTip();
  });

  $('#tip_percentage').keyup(function() {
    calculateTip();
  });

  function calculateTip() {
    const bill_amount_field = $('#bill_amount');
    const tip_pct_field = $('#tip_percentage');
    const tip_amount_field = $('#tip_amount');
    const grand_total_field = $('#grand_total');

    const bill_amount = parseFloat(bill_amount_field.val());
    const tip_percentage = parseFloat(tip_pct_field.val()) * 0.01;

    if (isNaN(bill_amount) || isNaN(tip_percentage)) {
      tip_amount_field.empty();
      grand_total_field.empty();
      return;
    }

    const tip_amount = bill_amount * tip_percentage;
    const grand_total = bill_amount + tip_amount;

    tip_amount_field.text(displayInDollars(tip_amount));
    grand_total_field.text(displayInDollars(grand_total));
  }

  function displayInDollars(float) {
    return '$' + Number(float).toFixed(2);
  }
});
