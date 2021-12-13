import { Link } from 'react-router-dom';

function Home() {
      return (
        <>
          <h2>Home Page</h2>
          <button><Link to="/students">Students</Link></button>
          <button><Link to="/groups">Groups</Link></button>
        </>
      );
    }
    

export default Home;