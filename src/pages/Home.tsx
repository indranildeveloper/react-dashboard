import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-xl mt-8">Home Page</h1>
      <div className="flex items-center justify-center mt-4">
        <Link to="/product">
          <button className="bg-primary hover:bg-purple-950 px-4 py-2 rounded-md text-white">
            Go To Product
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
