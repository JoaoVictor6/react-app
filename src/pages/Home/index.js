import React, { useState } from 'react';
import Card from "../../Components/Card";
import { useData } from '../../Context/context';
import { Grid } from './style';

function Home() {
    const { props } = useData();

    return (
        <Grid>
            {props.map((props, index) => <Card src={props.src} alt={props.alt} title={props.title} descricao={props.descricao} />)}
        </Grid>
    );
}

export default Home;
