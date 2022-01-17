import FanInformation from "./FanInformation";
// import PageHeading from "./PageHeading";

function App() {

  const ancientBirbsTeam = {
    id: 1,
    name: "Torrano Ancient Birbs",
    city: "Torrano",
    stadium: {
      name: "Birbs Nest",
      capacity: 30000
    }
  }

  const modernBirbs = {
    id: 2,
    name: "Torrano Modern Birbs",
    city: "Torrano",
    stadium: {
      name: "Birb Roost",
      capacity: 30001
    }
  }

  const sportsTeams = [ancientBirbsTeam, modernBirbs];

  const followTeam = (name) => {
    console.log(`You are now following that ${name}`);
  }

  return (
    <div>
      <PageHeading>
        <h1> ALL THE SPORTS TEAMS!!</h1>
        <h2> All The Time</h2>
        
      </PageHeading>
      <div>
      {
        sportsTeams.map((team, index)=>{
          return (
          <FanInformation
          key = {team.id} 
          id = {team.id}
          teamName={team.name}
          number = {index}
          city = {team.city}
          stadium = {team.stadium}
          followTeamFunction = {followTeam}
          />
          )
        })
      }
      </div>
    </div>
  );
}

export default App;


// I think a good way of thinking about it is something like the following:
// We have defined the followTeam function in the App.js

// Then we pass down the followTeam function into our FanInformation component through the followTeamFunction  prop

// Then inside of the FanInformation component we can access that function through the props object by using props.followTeamFunction

// So essentially we are defining a function in the App.js component and are able to pass that function down to the FanInformation component through props

// Props are kind of like a tunnel that we can pass functions, values, or whatever we want from Parent components to their children components
