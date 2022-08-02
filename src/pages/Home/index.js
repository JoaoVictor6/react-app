import React, { useState } from 'react';
import  Card from "../../Components/Card";
import { Grid } from './style';

import {data} from "../../Api/services";
import Context from '../../Context/context';

const datatemp = data

function Home(data) {
    const [props, setLists] = useState(data);
    return (
        <Context.Provider value={{ props }}>
            <Grid>
            {data.map((props, index) => <Card src={props.src} alt={props.alt} title={props.title} descricao={props.descricao}/>)}
            </Grid>
      </Context.Provider>   
    );
}

export default Home;
