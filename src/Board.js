import NavBar from './Components/Navbar'
import StayUpdated from './Components/StayUpdated'
import './Style/Board.css';

import shieldImg from './Assets/Shield.png'
import ArianaImg from './Assets/board_headshot/Ariana.png'
import ChrisImg from './Assets/board_headshot/Chris2.png'
import CatherineImg from './Assets/board_headshot/Catherine.png'
import IzzyImg from './Assets/board_headshot/Izzy2.png'
import JessicaImg from './Assets/board_headshot/Jessica.png'
import KaraImg from './Assets/board_headshot/Kara.png'
import PrableenImg from './Assets/board_headshot/Prableen.png'
import RidhanyaImg from './Assets/board_headshot/Ridhanya.png'
import TiffanyImg from './Assets/board_headshot/Tiffany.png'
import JasleenImg from './Assets/board_headshot/Jasleen.png'
import IshikaImg from './Assets/board_headshot/Ishika.png'
import PriyankaImg from './Assets/board_headshot/Priyanka.png'
import SoniyaImg from './Assets/board_headshot/Soniya.png'
import KeerthiImg from './Assets/board_headshot/Keerthi.png'

function BoardMember( {name, position, image} ){
  return(
    <div className="BoardMember">
      <img src={image} alt={`${name}'s image`} />
      <h2> {name} </h2>
      <p> {position} </p>
    </div>
  );
}
function Board() {
  return (
    <div className="Board">
      <NavBar></NavBar>
      <div className="MeetTheBoard">
        <h1> Meet the Board </h1>
      </div>
      <div className="Background">
        <div className="BackgroundCircle1"></div>
        <div className="BackgroundCircle2"></div>
        <div className="BackgroundCircle3"></div>
      </div>
      <div className="AllBoardMembers">
        <BoardMember name="Tiffany Nguyen" position="President" image={TiffanyImg}></BoardMember>
        <BoardMember name="Kara Barrese" position="Vice President" image={KaraImg}></BoardMember>
        <BoardMember name="Isabella Bravo" position="Treasurer" image={IzzyImg}></BoardMember>
        <BoardMember name="Ridhanya Sakthivel" position="Secretary" image={RidhanyaImg}></BoardMember>
        <BoardMember name="Keerthi Ramakuri" position="Public Relations" image={KeerthiImg}></BoardMember>
        <BoardMember name="Ariana Sun" position="Events Coordinator" image={ArianaImg}></BoardMember>
        <BoardMember name="Chris Shobe" position="Events Coordinator" image={ChrisImg}></BoardMember>
        <BoardMember name="Ishika Gupta" position="Project Manager" image={IshikaImg}></BoardMember>
        <BoardMember name="Jessica Tuso" position="Project Manager" image={JessicaImg}></BoardMember>
        <BoardMember name="Priyanka Ganguly" position="Industry Liason" image={PriyankaImg}></BoardMember>
        <BoardMember name="Soniya Phaltane" position="Industry Liason" image={SoniyaImg}></BoardMember>
        <BoardMember name="Catherine Hung" position="Webmaster" image={CatherineImg}></BoardMember>
        <BoardMember name="TBD" position="Underclassman Rep" image={shieldImg}></BoardMember>
        <BoardMember name="Jasleen Kaur" position="Faculty Advisor" image={JasleenImg}></BoardMember>
      </div>
      <StayUpdated></StayUpdated>
    </div>
  );
}

export default Board;
