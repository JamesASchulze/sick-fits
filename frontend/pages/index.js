import Link from 'next/link';

// This is a Stateless Functional Component
const Home = props => (
   <div>
      <p>Howdy, this is the Home Page!</p>
      <Link href="/sell">
         <a>Sell Page</a>
      </Link>
   </div>
)

export default Home;