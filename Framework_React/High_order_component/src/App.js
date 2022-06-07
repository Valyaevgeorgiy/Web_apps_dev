import './App.css';
import {Component} from "react";
import * as React from "react";

const InfoWithHover = withHover(Info)

function withHover(Component) {
  return class WithHover extends React.Component {
    state = { hovering: false }
    mouseOver = () => this.setState({ hovering: true })
    mouseOut = () => this.setState({ hovering: false })
    render() {
      return (
          <span onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                            <Component hovering={this.state.hovering} />
                        </span>
      );
    }
  }
}

function Info ({ hovering, height }) {
  const markClass = hovering ? 'mark mark--hover' : 'mark';
  return (
      <span className="icon" margin="auto">
                    <span className={markClass}>?</span>
        {hovering === true
            ? <Tooltip />
            : null}
                </span>
  )
}

function Tooltip () {
  return (
      <span className="tooltip">
          Это компьютерная игра серии Need for Speed в жанре аркадной автогонки, разработанная студией EA Canada и изданная компанией Electronic Arts для консолей, персональных компьютеров и мобильных телефонов в 2005 году.
      </span>
  )
}

function App() {
  return (
      <div className="App">
          <img src="https://sun9-west.userapi.com/sun9-61/s/v1/ig2/UAxQEX8hPoG3_KxfsGuInY6olYhdO0sOso_0Q0n2e-3OfjGCJOuV7HucNPnxyrOF54qS4at3NhjDBG5yBEFloLTO.jpg?size=860x235&quality=95&type=album"
               alt="img-logo" width="573" height="156"/>
          <br/>
          <br/>
          <InfoWithHover />
          <br/>
          <br/>
          <br/>
          <div className="images">
              <a href="https://www.ea.com/ru-ru/games/need-for-speed/need-for-speed-most-wanted-2005" target="_blank">
                  <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/9/9d/%D0%9F%D0%BE%D0%B3%D0%BE%D0%BD%D0%B8_%D0%B2_Need_for_Speed_Most_Wanted.jpg/368px-%D0%9F%D0%BE%D0%B3%D0%BE%D0%BD%D0%B8_%D0%B2_Need_for_Speed_Most_Wanted.jpg"
                       alt="img" width="552" height="414"
                       className="game-img"/>
              </a>
              <a href="https://www.ea.com/ru-ru/games/need-for-speed/need-for-speed-most-wanted" target="_blank">
                  <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/3/35/NFSMW-BE-Bonus-DVD.jpg/345px-NFSMW-BE-Bonus-DVD.jpg"
                       alt="img" width="552" height="414"
                       className="game-img"/>
              </a>
          </div>
      </div>
  );
}

export default App;
