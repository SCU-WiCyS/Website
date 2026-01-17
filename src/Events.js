import NavBar from './Components/Navbar'
import StayUpdated from './Components/StayUpdated'
import './Style/Events.css';
import Winter2024Events from './Assets/Winter2024 Events.png'
import Spring2025Events from './Assets/Spring2025 Events.png'

function Events() {
  return (
    <div className="Events">
      <NavBar></NavBar>
      <div className="UpcomingEvents">
        <h1> Upcoming Events </h1>
        <div className="Circle1"></div>
        <div className="Circle2"></div>
        <div className="Circle3"></div>
        <div className="Circle4"></div>
        <div className="Circle6"> 
          <div className="Circle5"></div> 
        </div>
      </div>
      <iframe
    src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&src=Y181YmQ2NjA5ZGUyYzc3ZWU1NzQ4YzUxM2M0ODUzNWRiOTNmZGRlNTExMTJmYjFjNWI2MjhhMzYwMDk0MDQ1NGQ4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23795548"
    style={{ border: "1px solid #777" }}
    width="800"
    height="600"
    frameBorder="0"
    scrolling="no"
    title="SCU ACM-W Events Calendar"
  />
      {/* <h1> Past Events </h1>
      <img src={Winter2024Events} alt="events" className="UpcomingEventsImg"></img> */}
      <StayUpdated></StayUpdated>
    </div>
  );
}

export default Events;
