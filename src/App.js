import React, { Component } from 'react';
import { CardTitle,  CardText, CardActions, Button, Card} from 'react-mdl';
import { SocialIcon } from 'react-social-icons';
import './App.css';
var bg=require('./me.jpg');


class App extends Component {
  render() {
    return (
      <div className="App">
          <Card shadow={0} style={{width: '320px', height: 'auto', margin: 'auto', padding: '16', borderRadius: '10px', marginTop: '10%'}}>
              <CardTitle expand style={{width: '320px', height: '250px', background:  "url(" + bg + ") top / cover"}}></CardTitle>
              <h4> Kristine Schwabauer </h4>
              <h5> Full Stack Developer | Berlin | Eng.</h5>
              <CardText>
                  <p style={{marginBottom: '0'}}> I am currently enrolled in a Master's program in International Media & Computing <a href={""}> @HTW_Berlin </a>
                      and working <a href={""}> @7Mind</a> as a Web Developer Working Student.</p>
              </CardText>
              <CardActions style={{paddingBottom: '2rem', paddingTop: '10px'}}>
                  <SocialIcon url="mailto:schwabauer.kristine@me.com" style={{ height: 40, width: 40, right: 10 }}/>
                  <SocialIcon url="https://www.linkedin.com/in/kristine-schwabauer/" style={{ height: 40, width: 40}}/>
                  <SocialIcon url="https://github.com/krstnschwpwr" style={{ height: 40, width: 40, left: 10}}/>
                  <SocialIcon url="https://soundcloud.com/krstn_schwpwr" style={{ height: 40, width: 40, left: 20}}/>
              </CardActions>
          </Card>
      </div>
    );
  }
}

export default App;
