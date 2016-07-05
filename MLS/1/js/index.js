$(function() {
  $('#signUpFormLink').click(function() {
    $("#signUpForm").delay(200).fadeIn(200);$("#signInForm").fadeOut(200);$('#signInFormLink').removeClass('active');$(this).addClass('active');
  });
	$('#signInFormLink').click(function() {
		$("#signInForm").delay(200).fadeIn(200);$("#signUpForm").fadeOut(200);$('#signUpFormLink').removeClass('active');$(this).addClass('active');
  });
});
