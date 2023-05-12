import React, { useEffect, useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Typography,
  Link,
  Grid,
  Container,
  Breadcrumbs,
  Button,
  Box,
} from "@mui/material";
// import { makeStyles } from "@mui/styles";
// @material-ui/lab components
// @material-ui/icons components
// import { Home, NavigateBefore, NavigateNext, Check } from "@mui/icons-material";
// import EventDialog from "./EventDialog";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../redux/Actions/customer.action";
import Drawer from "./Drawer";
import { useForm } from "react-hook-form";
// import { useStyles } from "./Style";

// export const useStyles = makeStyles((theme) => ({
//   root: {
//     //display: 'flex',
//     //flexWrap: 'wrap',
//     //justifyContent: 'space-around',
//     overflow: "hidden",
//     //font-family: 'Roboto', sans-serif;
//   },
//   calendarCtr: {
//     backgroundColor: "#11cdef",
//     height: "10rem",
//   },
//   calendar: {
//     //display: 'flex',
//     flexWrap: "nowrap",
//     justifyContent: "",
//     //backgroundColor: 'none',
//     width: "90vw",
//     margin: "auto",
//     marginTop: "-4rem",
//     backgroundColor: "#FFF",
//     paddingTop: "4rem",
//     borderRadius: ".5rem",
//     color: "#8898aa",
//   },
//   ctrButton: {
//     margin: ".2rem",
//     color: "#8898aa",
//     backgroundColor: "#FFF",
//     padding: ".2rem",
//     borderRadius: ".5rem",
//   },
//   gridList: {
//     //width: 500,
//     //height: 450,
//   },
// }));

export const CalendarView = (
  {
    //   fullEvent,
    //   setFullEvent,
    //   eventEdit,
    //   setEventEdit,
    //   eventsArray,
    //   handleAddEventSidebarToggle,
    //   handleSelectEvent,
    //   store,
  }
) => {
  var today = new Date();
  var y = today.getFullYear();
  var m = today.getMonth();
  var d = today.getDate();

  // const eventsArray = [
  //   {
  //     title: 'Test',
  //     start: '2021-05-02',
  //     end: '2021-05-04',
  //     className: 'error',
  //     id: 15
  //   },
  //   {
  //     id: 1,
  //     title: 'Call with Dave',
  //     start: '2021-05-11',
  //     allDay: true,
  //     className: 'bg-green',
  //     description:
  //       'Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  //   },

  //   {
  //     id: 2,
  //     title: 'Lunch meeting',
  //     start: new Date(y, m, d - 1, 10, 30),
  //     allDay: true,
  //     className: 'bg-orange',
  //     description:
  //       'Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  //   },

  //   {
  //     id: 3,
  //     title: 'All day conference',
  //     start: new Date(y, m, d + 7, 12, 0),
  //     allDay: true,
  //     className: 'bg-green',
  //     description:
  //       'Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  //   },

  //   {
  //     id: 4,
  //     title: 'Meeting with Mary',
  //     start: new Date(y, m, d - 2),
  //     allDay: true,
  //     className: 'bg-blue',
  //     description:
  //       'Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  //   },

  //   {
  //     id: 5,
  //     title: 'Winter Hackaton',
  //     start: new Date(y, m, d + 1, 19, 0),
  //     allDay: true,
  //     className: 'bg-red',
  //     description:
  //       'Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  //   },

  //   {
  //     id: 6,
  //     title: 'Digital event',
  //     start: new Date(y, m, 11),
  //     allDay: true,
  //     className: 'bg-warning',
  //     description:
  //       'Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  //   },

  //   {
  //     id: 7,
  //     title: 'Marketing event',
  //     start: new Date(y, m, 21),
  //     allDay: true,
  //     className: 'bg-purple',
  //     description:
  //       'Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  //   },

  //   {
  //     id: 8,
  //     title: 'Dinner with Family',
  //     start: new Date(y, m, 19),
  //     allDay: true,
  //     className: 'bg-red',
  //     description:
  //       'Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  //   },

  //   {
  //     id: 9,
  //     title: 'Black Friday',
  //     start: new Date(y, m, 23),
  //     allDay: true,
  //     className: 'bg-blue',
  //     description:
  //       'Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  //   },

  //   {
  //     id: 10,
  //     title: 'Cyber Week',
  //     start: new Date(y, m, 2),
  //     allDay: true,
  //     className: 'bg-yellow',
  //     description:
  //       'Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  //   }
  // ]

  //   const classes = useStyles();

  const calanderRef = useRef();

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [events, setEvents] = useState([]);
  const [event, setEvent] = React.useState({});
  const [isEditModal, setIsEditModal] = React.useState(false);
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [allDay, setAllDay] = React.useState(false);
  const [eventModal, setEventModal] = React.useState(false);
  const [radios, setRadios] = React.useState("");
  const [eventDescription, setEventDescription] = React.useState("");
  const [currentDate, setCurrentDate] = React.useState(null);

  const [field, setField] = useState({
    title: "",
    start: "",
    end: "",
  });

  const dispatch = useDispatch();

  const eventsArray = useSelector((state) => state?.customers?.events);

  const { setValue, getValues } = useForm();

  useEffect(() => {
    dispatch(getAllEvents());
    // Use Effect On first Render
    // refill Events with dump Data or Api Call
    // @ts-ignore
    setEvents(eventsArray);
  }, []);

  //   const addNewEvent = () => {
  //     let newEvents = {
  //       id: events.length + 1,
  //       title: fullEvent,
  //       start: startDate,
  //       end: endDate,
  //       allDay: allDay,
  //       className: radios,
  //       description: eventDescription,
  //     };
  //     // @ts-ignore
  //     setEvents([...events, newEvents]);
  //     setEventModal(false);
  //     // @ts-ignore
  //     setStartDate(undefined);
  //     // @ts-ignore
  //     setEndDate(undefined);
  //     setRadios("bg-info");
  //     setFullEvent("");
  //     setEventDescription("");
  //   };

  const editEvent = (event) => {
    // console.log(event, 'EDIT EVENT')
    let newEvents = eventsArray?.map((ev) => {
      if (ev.id.toString() === event.id) {
        // console.log('Matche found on ID: ', ev.id)
        event.remove();
        let saveNewEvent = {
          ...ev,
          //   title: fullEvent,
          className: radios,
          description: eventDescription,
        };
        return saveNewEvent;
      } else {
        return ev;
      }
    });
    // @ts-ignore
    setEvents(newEvents);
    // @ts-ignore
    setStartDate(undefined);
    // @ts-ignore
    setEndDate(undefined);
    setIsEditModal(false);
    setRadios("bg-info");
    // setFullEvent("");
    setEventDescription("");
    setEventModal(false);
  };

  const handleEventClick = (info) => {
    setOpen(!open);
    setField({
      ...field,
      title: info?.event?._def?.title,
      start: info.event.start,
      end: info.event.end,
    });
    setValue("event", info?.event);
    // setTitle("title", info?.event?._def?.title);
    // setValue("start", info.event.start);
    // setValue("end", info.event.end);
  };

  const handleDateSelect = (info) => {
    // console.log(info, 'INFO')
    // handleSidebarToggleSidebar()
    // // console.log('handleDateSelect')
    // setStartDate(info.start)
    // setEndDate(info.end)
    // setRadios('bg-info')
    // setIsEditModal(false)
    // setEventModal(true)
  };

  const renderEventContent = () => {
    // console.log('renderEventContent')
  };

  const handleDateClick = () => {
    // console.log('handleDateClick')
    // handleSidebarToggleSidebar()
  };

  const handleEvents = () => {
    // console.log('handleEvents')
  };

  const changeView = (newView) => {
    // @ts-ignore
    let calendar = calanderRef.current.getApi();
    calendar.changeView(newView);
    setCurrentDate(calendar.view.title);
  };

  const handleSidebarToggleSidebar = () => {
    // handleAddEventSidebarToggle();
    // dispatch(handleSelectEvent(null));
  };

  return (
    <>
      <div>
        <div>
          <Container maxWidth={false} component={Box}>
            <Grid
              container
              component={"div"}
              alignItems={"center"}
              paddingTop={"0.5rem"}
              paddingBottom={"0.5rem"}
            >
              <Grid item xs={12} lg={6}>
                <Typography variant="h4" className={""}>
                  {currentDate}
                </Typography>
                <Breadcrumbs separator="-" aria-label="breadcrumb">
                  <Link
                    color="inherit"
                    href="/"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Box
                      //   component={Home}
                      width="1.25rem!important"
                      height="1.25rem!important"
                      position="relative"
                    />
                  </Link>
                  <Link
                    color="inherit"
                    href="/getting-started/installation/"
                    onClick={(e) => e.preventDefault()}
                  >
                    Calendar
                  </Link>
                  <Typography component="span" className={""}>
                    {currentDate}
                  </Typography>
                </Breadcrumbs>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Button
                  variant="contained"
                  size="small"
                  // className={classes.ctrButton}
                  onClick={() => {
                    // @ts-ignore
                    let calendar = calanderRef.current.getApi();
                    calendar.prev();
                  }}
                  sx={{ marginRight: "10px" }}
                >
                  {/* <NavigateBefore /> */}
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  // className={classes.ctrButton}
                  onClick={() => {
                    // @ts-ignore
                    let calendar = calanderRef.current.getApi();
                    calendar.next();
                  }}
                  sx={{ marginRight: "10px" }}
                >
                  {/* <NavigateNext /> */}
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  // className={classes.ctrButton}
                  onClick={() => {
                    // @ts-ignore
                    let calendar = calanderRef.current.getApi();
                    calendar.today();
                  }}
                  sx={{ marginRight: "10px" }}
                >
                  Today
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  // className={classes.ctrButton}
                  onClick={() => changeView("dayGridMonth")}
                  sx={{ marginRight: "10px" }}
                >
                  Month
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  // className={classes.ctrButton}
                  onClick={() => changeView("dayGridWeek")}
                  sx={{ marginRight: "10px" }}
                >
                  Week
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  // className={classes.ctrButton}
                  onClick={() => changeView("dayGridDay")}
                  sx={{ marginRight: "10px" }}
                >
                  Day
                </Button>
              </Grid>
            </Grid>
          </Container>
        </div>

        <div>
          <FullCalendar
            // @ts-ignore
            ref={calanderRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            //dateClick={handleDateClick}
            //editable={true}
            // selectable={true}
            // selectMirror={true}
            dayMaxEvents={5}
            weekends={true}
            //themeSystem= "bootstrap"
            initialView="dayGridMonth"
            //initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            events={eventsArray}
            // eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
            // select={handleDateSelect}
            // eventsSet={handleEvents}
            // called after events are initialized/added/changed/removed
            // you can update a remote database when these fire:
            eventAdd={function () {
              console.log("Event Added");
            }}
            eventChange={function () {
              console.log("Event Changed");
            }}
            eventRemove={function () {
              console.log("Event Removed");
            }}
            /*headerToolbar={
              false {
          left: "title",
          center: "",
          right: "prev,next today dayGridMonth,timeGridWeek,timeGridDay"
        }
            }*/
          />
        </div>
        {/* <EventDialog
          eventModal={eventModal}
          setEventModal={setEventModal}
          event={event}
          fullEvent={fullEvent}
          setFullEvent={setFullEvent}
          radios={radios}
          setRadios={setRadios}
          eventDescription={radios}
          setEventDescription={setEventDescription}
          addNewEvent={addNewEvent}
          editEvent={editEvent}
          isEditModal={isEditModal}
        /> */}
      </div>
      <Drawer
        open={open}
        toggle={toggleDrawer}
        field={field}
        setField={setField}
        setValue={setValue}
        getValues={getValues}
      />
    </>
  );
};

export default CalendarView;
