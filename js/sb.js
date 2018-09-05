var $form = $('form#email-form'),
    url = 'https://script.google.com/macros/s/AKfycbwrFY6XZESSXwwwAozKaUuUf44GBI-e5gSQWCTq0UV5ZBt4L1VB/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize(),
    crossOrigin: true,
    callback: "?"
  }).done(function() {
    $("input#email-input").val("");
    $("#email-success").show();
  }
  );
})
