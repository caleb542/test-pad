const dateMe = (d) => {
    const days = [{
            dayName: 'Monday',
            shortName: 'Mon'
        },
        {
            dayName: 'Tuesday',
            shortName: "Tue"
        }, {
            dayName: 'Wednesday',
            shortName: 'Wed'
        }, {
            dayName: 'Thursday',
            shortName: 'Thu'
        },
        {
            dayName: 'Friday',
            shortName: 'Fri'
        },
        {
            dayName: 'Saturday',
            shortName: 'Sat'
        },
        {
            dayName: 'Sunday',
            shortName: 'Sun'
        }
    ]
   
    const months = [{
        monthName: 'January',
        shortName: 'Jan'
    },
    {
        monthName: 'February',
        shortName: 'Feb'
    }, {
        monthName: 'March',
        shortName: 'Mar'
    }, {
        monthName: 'April',
        shortName: 'Apr'
    },
    {
        monthName: 'May',
        shortName: 'May'
    },
    {
        monthName: 'June',
        shortName: 'Jun'
    },
    {
        monthName: 'July',
        shortName: 'Jul'
    },
    {
        monthName: 'August',
        shortName: "Aug"
    }, {
        monthName: 'September',
        shortName: 'Sep'
    }, {
        monthName: 'October',
        shortName: 'Oct'
    },
    {
        monthName: 'November',
        shortName: 'Nov'
    },
    {
        monthName: 'December',
        shortName: 'Dec'
    }
]

const suffix = ['','st','nd','rd','th','th','th','th','th','th','th','th','th','th','th','th','th','th','th','th','th','st','nd','rd','th','th','th','th','th','th','th','st']

   
   

    let dayNum = new Date(d).getDay()
    let monthNum = new Date(d).getMonth()
    let monthDay = new Date(d).getDate()

    let day = days[dayNum].shortName
    let month = months[monthNum].shortName
    let year = new Date(d).getFullYear()
    return day + ", " + month + " " + monthDay + suffix[monthDay] + ", "+ year
}


export const meridian = (d) => {
    const time = new Date(d).getHours() + ':' + new Date(d).getMinutes()
    return parseInt(new Date(d).getHours()) < 12 ?  time + "am": time + "pm"
}


export default dateMe