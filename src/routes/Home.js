import React from 'react';
import axios from 'axios';



axios.get('https://kr.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-39259d2d-4186-4f38-a09a-542826ed77b5').then((Response)=>{
    console.log(Response.data);
}).catch((Error)=>{
    console.log(Error);
});

class Home extends React.Component{
    
    render(){
        return (
            <h1>hello</h1>
        );
    }
}

export default Home;