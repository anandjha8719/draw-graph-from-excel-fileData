
import { useLocalStorage } from "../useLocalStorage";
import {useNavigate} from 'react-router-dom'



export const Home = () => {

const navigate = useNavigate();
const navigateToGraphPage = () => {
    
    navigate('/parse-excel');
  };

const [name, setName] = useLocalStorage("name", "");

  return (
    <div>
        <form>
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            aria-label="fullname"
        />
        <input type="submit" value="Submit"></input>
        </form>
        <button onClick={navigateToGraphPage}> to graph page</button>
    </div>
    
  );


}
