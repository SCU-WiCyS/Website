import NavBar from './Components/Navbar'
import StayUpdated from './Components/StayUpdated'
import './Style/Board.css';

import shieldImg from './Assets/Shield.png'
import ArianaImg from './Assets/board_headshot/Ariana.png'
import ChrisImg from './Assets/board_headshot/Chris2.png'
import CatherineImg from './Assets/board_headshot/Catherine.png'
import JessicaImg from './Assets/board_headshot/Jessica.png'
import KaraImg from './Assets/board_headshot/Kara.png'
import RidhanyaImg from './Assets/board_headshot/Ridhanya.png'
import JasleenImg from './Assets/board_headshot/Jasleen.png'
import IshikaImg from './Assets/board_headshot/Ishika.png'
import PriyankaImg from './Assets/board_headshot/Priyanka.png'

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
        <BoardMember name="Kara Barrese" position="President" image={KaraImg}></BoardMember>
        <BoardMember name="Chris Shobe" position="Vice President" image={ChrisImg}></BoardMember>
        <BoardMember name="Ariana Sun" position="Vice President" image={ArianaImg}></BoardMember>
        <BoardMember name="Jessica Tuso" position="Treasurer" image={JessicaImg}></BoardMember>
        <BoardMember name="Ishika Gupta" position="Secretary" image={IshikaImg}></BoardMember>
        <BoardMember name="Astha Desai" position="Public Relations" image={shieldImg}></BoardMember>
        <BoardMember name="Ridhanya Sakthivel" position="Events Coordinator" image={RidhanyaImg}></BoardMember>
        <BoardMember name="Christine O'Donnell" position="Events Coordinator" image={shieldImg}></BoardMember>
        <BoardMember name="Catherine Hung" position="Project Manager" image={CatherineImg}></BoardMember>
        <BoardMember name="Priyanka Ganguly" position="Industry Liason" image={PriyankaImg}></BoardMember>
        <BoardMember name="TBD" position="Underclassman Rep" image={shieldImg}></BoardMember>
        <BoardMember name="Jasleen Kaur" position="Faculty Advisor" image={JasleenImg}></BoardMember>
      </div>
      <StayUpdated></StayUpdated>
    </div>
  );
}

export default Board;
