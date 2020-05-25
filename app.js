$(document).ready(function(){
    let currentDayofWeek = moment().format("[Today is] dddd")
    let currentTime = moment().format('h:mm a')

    let dailyPlannerTimes = ['08:00 am', '09:00 am', '10:00 am', '11:00 am', "12:00 pm", '1:00 pm', '2:00pm', '3:00pm', '4:00 pm', '5:00pm']

    for (i=0;i<dailyPlannerTimes.length;i++) {
        if (currentTime > dailyPlannerTimes[i]) {
            newDailyPlannerSpace = $('<div>')
            outerBox = $('<div>')
            meetingTextSpace = $('<div>')
            newlistCreate = $('<ul>')
            newlistCreate.addClass('listSpace')
            meetingTextSpace.append(newlistCreate)
            newTimes = $('<input>')
            newTimes.attr('placeholder', 'Add Plans here')
            meetingTextSpace.addClass('meetingInfoSpace')
            outerBox.addClass('redBufferSpace')
            outerBox.attr('value', dailyPlannerTimes[i])
            outerBox.append(dailyPlannerTimes[i])
            outerBox.append(meetingTextSpace)
            outerBox.append(newTimes)
            newTimes.addClass('hourSpace')
            newDailyPlannerSpace.append(outerBox)
            $('#meetingSpaces').append(newDailyPlannerSpace)

            
        } else {
            newDailyPlannerSpace = $('<div>')
            outerBox = $('<div>')
            meetingTextSpace = $('<div>')
            newlistCreate = $('<ul>')
            newlistCreate.addClass('listSpace')
            meetingTextSpace.append(newlistCreate)
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

    let yellowBox = $('.redBufferSpace').slice(-1)[0]
        if (currentTime < '5:59 pm') {
            yellowBox.setAttribute('class','yellowBufferSpace')
        } 

    $('.hourSpace').keypress(function() {
        if ( event.which == 13 ) {
            targetText = $(this).val()
            parentDiv = $(this).parent()
            neededDiv = parentDiv.children()
            targetDiv = neededDiv[0].firstChild
            let newListItem = document.createElement('li')
            newListItem.setAttribute('class', 'newListItem')
            newListItem.append(targetText)
            targetDiv.append(newListItem)
            $(this).val('')
        }
    })

    $('.meetingInfoSpace').on('click', '.newListItem', function(){
        $(this).text('')
    })

})
