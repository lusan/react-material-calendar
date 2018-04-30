import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import FullScreenDialog from '../../../components/FullScreenDialog'
 
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  tableCell: {
    position: 'relative',
    width: 100
  },
  event: {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "zIndex": "5",
    "background": "rgb(124, 179, 66)",
    "height": "100%",
    "color": "#fff",
    "borderRadius": "4px",
    "display": "inline-flex",
    "alignItems": "center",
    "padding": "2px",
    "border": "1px solid #fff"
  }
});

const getEventPositions = (noOfElements, arrIndex) => {
  var results = [0]
  var sum = 0
  var basePosition = 100 / noOfElements
  
  for(let i = 1; i < noOfElements; ++i) {
    sum = sum + basePosition
    results.push(sum)
  }
  
  return results[arrIndex]
}

const calendarData = [
  {
    id: 1,
    day: 'Sunday',
    date: 29,
    month: 'April',
    events: [
      '1', '2', '3'
    ]
  },
  {
    id: 2,
    day: 'Monday',
    date: 30,
    month: 'April'
  },
  {
    id: 3,
    day: 'Tuesday',
    date: 1,
    month: 'April'
  },
  {
    id: 4,
    day: 'Wednesday',
    date: 2,
    month: 'April'
  },
  {
    id: 5,
    day: 'Thursday',
    date: 3,
    month: 'April'
  },
  {
    id: 6,
    day: 'Friday',
    date: 4,
    month: 'April'
  },
  {
    id: 7,
    day: 'Saturday',
    date: '5',
    month: 'April'
  }
]

const calendarTimeData = [
  {
    id: 1,
    time: 1,
    day_type: 'am',
    events: [
      
    ]
  },
  {
    id: 2,
    time: 2,
    day_type: 'am',
    events: [
      ['event 7', 'event  8', 'event 9'],
      ['event 10', 'event  11', 'event 12'],
      ['event 10', 'event  11', 'event 12'],
      ['event 10', 'event  11', 'event 12'],
      ['event 10', 'event  11', 'event 12'],
      ['event 7', 'event  8', 'event 9'],
      ['event 10', 'event  11', 'event 12']
    ]
  },
  {
    id: 3,
    time: 3,
    day_type: 'am',
    events: []
  },
  {
    id: 4,
    time: 5,
    day_type: 'am',
    events: []
  },{
    id: 6,
    time: 6,
    day_type: 'am',
    events: []
  },
  {
    id: 7,
    time: 7,
    day_type: 'am',
    events: []
  },
  {
    id: 8,
    time: 8,
    day_type: 'am',
    events: []
  },
  {
    id: 9,
    time: 9,
    day_type: 'am',
    events: []
  }
]

const getRemainingColumns = (arrLength, classes) => {
  var columns = []
  
  for(let i = 0; i < 7 - arrLength; ++i) {
    columns.push(<TableCell className={classes.tableCell} key={i}></TableCell>)
  }
  
  return columns
}

class Details extends Component {
  constructor(props) {
    super(props)

    this.addEventToCalendar = this.addEventToCalendar.bind(this)
  }
  
  addEventToCalendar(e) {
    console.log('it works')

    if (e.target !== e.currentTarget) {
      console.log(e.target);
    }
    e.stopPropagation();
  }

  render() {
    const {classes} = this.props
    
    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                {calendarData.map((data, index) => (
                  <TableCell key={index}>
                    {data.date}
                    {data.day}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody onClick={this.addEventToCalendar}>
              {calendarTimeData.map((data, calendarIndex) => (
                  <TableRow key={calendarIndex}>
                    <TableCell className={classes.tableCell}>
                      {data.time}
                      {data.day_type}
                    </TableCell>
                    {data.events.map((event, index) => (
                      <TableCell className={classes.tableCell}>
                        {event.map((eve, index) => (
                          <div
                            key={index} 
                            className={classes.event} 
                            style={
                              event.length > 1 ?
                              {
                              left: getEventPositions(event.length, index)+'%'
                              } : 
                              {
                                left: 0,
                                width: '100%'
                              }
                            }
                          >
                            {eve}
                          </div>
                        ))}
                      </TableCell>
                    ))}
                    {getRemainingColumns(data.events.length, classes)}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Paper>
        <FullScreenDialog />
      </div>
    );
  }
}

Details.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Details);