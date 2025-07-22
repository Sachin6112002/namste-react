const parent = React.createElement("div" , {id: "parent"}, React.createElement("div" , {id: "child"} , React.createElement(["h1", {}, "Welcome to my react nested code " , "h2", {}, "Welcome to my react nested code " ] )))

const root = ReactDOM.createRoot(document.getElementById("root"))
.render(parent) 