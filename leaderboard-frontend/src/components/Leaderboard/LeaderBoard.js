import React, { Component } from "react";
// import './LeaderBoard.css';

import "../LeaderboardComponents/ActivityFeed";
import ActivityFeed from "../LeaderboardComponents/ActivityFeed";
// import WeeklyLeaderboard from '../LeaderboardComponents/WeeeklyLeaderboard';
import WeeklyData from "../LeaderboardComponents/WeeklyData";
// import OverallLeaderboard from '../LeaderboardComponents/OverallLeaderboard';
import OverallData from "../LeaderboardComponents/OverallData";
import { connectAsync } from "iguazu";
import { queryGithub, queryStudents } from "../../actions";

class LeaderBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // students: [
      //     { name: "Maria Martinez", gitScore: 11, huntrScore: 13, Total: 72 },
      //     { name: "Jane Doe", gitScore: 10, huntrScore: 11, Total: 56 },
      //     { name: "John Smith", gitScore: 9, huntrScore: 10, Total: 44 },
      //     { name: "Joe Chan", gitScore: 8, huntrScore: 9, Total: 43 },
      //     { name: "Mike Moo", gitScore: 7, huntrScore: 10, Total: 41 },
      // ]
    };
  }
  render() {
    if (localStorage.getItem("invalid")) {
      localStorage.removeItem("invalid");
      this.props.history.push("/");
    }

    if (this.props.isLoading()) {
      if (localStorage.getItem("invalid")) {
        localStorage.removeItem("token");
        localStorage.removeItem("invalid");
        this.props.history.push("/");
      }
      return <div>Loading...</div>;
    }

    if (this.props.loadedWithErrors()) {
      return <div>Oh no! Something went wrong</div>;
    }
   
      const gitObject = [];
    this.props.data.gitData.forEach((git, x) => {
        this.props.data.huntr.forEach(huntr => {
            if (git !== null) {
                if (git.FullName === huntr.firstname + ' ' + huntr.familyName) {
                    gitObject.push({Git: git, Huntr: huntr})
                }
            }
        })
    })

    return (
      <div className="App">
        <p />
        <div>
          <ActivityFeed />
        </div>
        <div>
          {/*<WeeklyLeaderboard />*/}
           <WeeklyData
            // props={this.props}
            // gitObject={gitObject}
            data={gitObject}
            // students={this.props.students}
          />
        </div>
        <div class="ui horizontal divider" />
        <div>
          {/*<OverallLeaderboard />*/}
          <OverallData

            data={gitObject}
            // students={this.props.students}
          />
        </div>
      </div>
    );
  }
}
export function loadDataAsProps({ store }) {
  const { dispatch } = store;
  return {
    data: () => dispatch(queryGithub())
  };
}

export default connectAsync({ loadDataAsProps })(LeaderBoard);
