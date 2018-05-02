$( document ).ready(function() {
      var targetDate = new Date();
      targetDate.setMonth(targetDate.getMonth())
      targetDate.setDate(5)
      targetDate.setHours(6)
      targetDate.setMinutes(30)
      targetDate.setSeconds(0)
      targetDate.setMilliseconds(0);

      var targetDateStringUTC = targetDate.toISOString()
                                          .replace(':00.000', '');
      var targetDateString = targetDateStringUTC.replace('Z', '');

      var targetLADate = moment.tz(targetDateStringUTC,
                                   'America/Los_Angeles').format();
      var tzLAOffset = targetLADate.substr(-6);
      var targetDateStringOffset = targetDateString.replace('Z', '')
                                       .replace(':00.000', '') +
                                       tzLAOffset;

      var tzOldFormatOffset = targetDateString.substr(-5);
      var targetDateOldFormatString = targetDate.toLocaleDateString() +
                                      ' ' + tzOldFormatOffset;

      var pastDate = new Date();
      pastDate.setMonth(targetDate.getMonth() - 18)
      pastDate.setMinutes(0);
      pastDate.setSeconds(0);
      pastDate.setMilliseconds(0);
      var targetDateStringPast = pastDate.toISOString()
                                         .replace(':00.000', '');
      var nearFutureDate = new Date();
      nearFutureDate.setSeconds(nearFutureDate.getSeconds() + 10);
      nearFutureDate.setMilliseconds(0);
      var nearFutureDateString = nearFutureDate.toISOString()

      $('.example').each(function() {
        var str = $( this ).html()
        var newstr = str.replace("{targetDateString}",
                             targetDateString )
                    .replace("{targetDateStringUTC}",
                             targetDateStringUTC )
                    .replace("{targetDateStringOffset}",
                             targetDateStringOffset )
                    .replace("{targetDateOldFormatString}",
                             targetDateOldFormatString )
                    .replace("{nearFutureDateString}",
                             nearFutureDateString )
                    .replace("{targetDateStringPast}",
                             targetDateStringPast );

        $( this ).html(newstr);
      } );

      function reloadCounter(element_id,
                             new_target,
                             targetTimezone,
                             cubeSize,
                             background,
                             color,
                             onEnd,
                             triggerEnd) {

        $(element_id).empty();

        $(element_id).countdownCube( {
          target: new_target,
          targetTimezone: targetTimezone,
          cubeSize: cubeSize,
          background:  background,
          color: color,
          onEnd: onEnd,
          triggerEnd: triggerEnd,
        } );
      };

      if($(window).width() < 480) {
	 $('#counter-days-only').countdownCube( {
		target: targetDateStringUTC,
		cubeSize: 70,
		showDaysOnly: true,
		color: 'white',
	 });
 	} else {
	  $('#counter-days-only').countdownCube( {
	  target: targetDateStringUTC,
	  cubeSize: 130,
	  color: 'white',
	  showDaysOnly: true,
      });
    }
		
});
