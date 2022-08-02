import Img from "../Img";
import {Box, Content} from "./style";

function index(props){
    return(
        <Box>
          <Content>
            <Img src={props.src} alt={props.alt}/>
            <h2>{props.title}</h2>
            <p>{props.descricao}</p>
          </Content>
        </Box>
    );
}

export default index;