import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Administration from './Components/Administration'
import Cabinet from './Components/Cabinet'
import DocDepot2 from './Components/Documents/DocDepot2'
import SearchDepose from './Components/Documents/SearchDepose'
import SearchIndex from './Components/Documents/SearchIndex'
import Home5 from './Components/Home5'


export default function Routes() {
    return (
        <div>
          <Switch>
            <Route path="/administration" exact component={Administration}/>
            <Route path="/cabinet" exact component={Cabinet}/>
            <Route path="/docDepot" exact component={DocDepot2}/>
            <Route path="/searchDepose" exact component={SearchDepose}/>
            <Route path="/searchIndexe" exact component={SearchIndex}/>
          </Switch>
        </div>
    )
}
