import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card
            className="project"
            shadow={5}
            style={{ minWidth: "450", margin: "auto", marginTop: ".5em" }}
          >
            <CardTitle
              style={{
                color: "#black",
                height: "176px",
                background:
                  "url(https://i.postimg.cc/DwkQNsbz/Get-the-Best-Celebrity-Looks.png) center / cover"
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>hola este es mi proyecto</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card
            className="project"
            shadow={5}
            style={{ minWidth: "450", margin: "auto", marginTop: ".5em" }}
          >
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://i.postimg.cc/DwkQNsbz/Get-the-Best-Celebrity-Looks.png) center / cover"
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>hola este es mi proyecto </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3 */}
          <Card
            className="project"
            shadow={5}
            style={{ minWidth: "450", margin: "auto", marginTop: ".5em" }}
          >
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://i.postimg.cc/DwkQNsbz/Get-the-Best-Celebrity-Looks.png) center / cover"
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>hola este es mi proyecto </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Mi proyectos</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Projects;
