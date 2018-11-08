def increment_dictionary_values(d,i):
  new_dict = d.copy()
  for key, value in new_dict.items():
    new_dict[key] = value + i
  return new_dict


  <Route path="/city"  component= <DataContainer data={this.state.data}/> key="city"/>
<Route path="/country"  component= <DataContainer data={this.state.data}/> key="country"/>
<Route path="/AllBuildings"  component= <DataContainer data={this.state.data}/> key="All Buildings"/>
<Route path="/100m+"  component= <DataContainer data={this.state.data}/> key="100m+"/>
<Route path="/150m+"  component= <DataContainer data={this.state.data}/> key="150m+"/>
<Route path="/200m+"  component= <DataContainer data={this.state.data}/> key="200m+"/>
<Route path="/300m+"  component= <DataContainer data={this.state.data}/> key="300m+"/>
<Route path="/TelecomTowers"  component= <DataContainer data={this.state.data}/> key="Telecom Towers"/>
<Route path="/AllStructures"  component= <DataContainer data={this.state.data}/> key="All Structures"/>
