const surveyCompleteMsg = ( () => {
  $('main').css({
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'height': '100vh'
  })
  $('main').html(`
    <div class="surveyCompleteMsg">
      <h1>Thank you for your garbage!</h1>
      <img id="oscar" src="images/Oscar-lg.png">
    </div>
  `);
});
