import { BrowserRouter, Switch, Route } from "react-router-dom";

function Home(){
  return <h1 className="text-4xl font-bold">Home Page</h1>;
}

export default function AppRouter(){
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}