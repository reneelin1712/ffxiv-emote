import { useState } from "react";
// import axios from "axios";
import { Grid, Button } from "@material-ui/core";

import EmoteIcon from './emoteIcon'
// import EmoteInfo from './emoteInfo'



export default function App() {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const fflink = 'https://xivapi.com/item/1675?private_key=cca258340a9340aab1d0a6b134e4606e9016935b3ef04338a209bc8971f62a25'
  // const link = `https://pokeapi.co/api/v2/pokemon?limit=900`

  // const fflink = 'https://xivapi.com/emote/1?private_key=cca258340a9340aab1d0a6b134e4606e9016935b3ef04338a209bc8971f62a25'
  // const fflink1 = 'https://xivapi.com/emote?private_key=cca258340a9340aab1d0a6b134e4606e9016935b3ef04338a209bc8971f62a25'


  // useEffect(() => {
  //   axios(fflink).then(res => {
  //     console.log(res.data.IconHD);
  //   });
  //   axios(fflink1).then(res => {
  //     console.log(res.data);
  //   });
  // }, []);

  return <div >


      <Grid container spacing={3} justifyContent="center" alignItems="center"> 
      
      <h1>FFXIV Emote List</h1>

        <Grid item xs={12} container justifyContent="center" alignItems="center">
          <Button
            // onClick={() => turnPage({ next: prevPage })}
            varient="contained"
            color="primary"
          >
            Prev
          </Button>
  
          <Button
            // onClick={() => turnPage({ next: nextPage })}
            varient="contained"
            color="primary"
          >
            Next
          </Button>
        </Grid>


        <Grid item xs={12} container justifyContent="center" alignItems="center">
      <EmoteIcon/>
      </Grid>

      {/* <EmoteInfo/> */}
      </Grid>

    
  </div>;
}




