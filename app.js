$(document).ready(function(){
    let currentDayofWeek = moment().format("[Today is] dddd")
    let currentTime = moment().format('h:mm a')

    console.log(currentTime)

    let dailyPlannerTimes = ['08:00 am', '09:00 am', '10:00 am', '11:00 am', "12:00 pm", '1:00 pm', '2:00pm', '3:00pm', '4:00 pm', '5:00pm']

    for (i=0;i<dailyPlannerTimes.length;i++) {
        if (currentTime > dailyPlannerTimes[i]) {
            newDailyPlannerSpace = $('<div>')
            outerBox = $('<div>')
            meetingTextSpace = $('<div>')
            newTimes = $('<input>')
            newTimes.attr('placeholder', 'Add Plans here')
            meetingTextSpace.addClass('meetingInfoSpace')
            outerBox.addClass('redBufferSpace')
            outerBox.append(dailyPlannerTimes[i])
            outerBox.append(meetingTextSpace)
            outerBox.append(newTimes)
            newTimes.addClass('hourSpace')
            newDailyPlannerSpace.append(outerBox)
            $('#meetingSpaces').append(newDailyPlannerSpace)

            let currentHour = moment().format('h:00 a')
            console.log(outerBox)
            

            // if (currentHour == dailyPlannerTimes[i]) {
            //     console.log(currentHour)
            //     outerBox.attr('class', 'yellowBufferSpace')
            // }
            
        } else {
            newDailyPlannerSpace = $('<div>')
            outerBox = $('<div>')
            meetingTextSpace = $('<div>')
            newTimes = $('<input>')
            newTimes.attr('placeholder', 'Add Plans here')
            meetingTextSpace.addClass('meetingInfoSpace')
            outerBox.addClass('bufferSpace')
            outerBox.append(dailyPlannerTimes[i])
            outerBox.append(meetingTextSpace)
            outerBox.append(newTimes)
            newTimes.addClass('hourSpace')
            newDailyPlannerSpace.append(outerBox)
            $('#meetingSpaces').append(newDailyPlannerSpace)
            }
    }


    $('.hourSpace').keypress(function() {
        if ( event.which == 13 ) {
            let targetText = $(this).val()
            console.log(targetText)
            let parentDiv = $(this).parent()
            let neededDiv = parentDiv.children()
            neededDiv = neededDiv[0]
            neededDiv.append(targetText)
        }
    })




})