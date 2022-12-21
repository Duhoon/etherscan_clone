import "./Home.css";

const Home = () => {
  return (
    <div className="home bg-gray-light  h-[80vh] pt-10">
      <div className="home-content bg-gray-light w-2/3 h-[70vh] m-auto flex justify-between">
        <div className="block-list bg-white flex-auto mr-5 rounded-md flex flex-col border-solid border-gray-light border-[0.5px] shadow-lg">
          <p className="p-3 flex-none text-gray-dark">Latest Blocks</p>
          <div className="flex-1 border-solid border-t-[0.5px] border-gray-light text-gray-dark">
            blocks!
          </div>
          <button className="flex-none bg-gray-dark text-white p-3">
            View all blocks
          </button>
        </div>
        <div className="tx-list bg-white flex-auto mr-5 rounded-md flex flex-col border-solid border-gray-light border-[0.5px] shadow-lg">
          <p className="p-3 flex-none text-gray-dark">Latest Transactions</p>
          <div className="flex-1 border-solid border-t-[0.5px] border-gray-light text-gray-dark">
            Transactions
          </div>
          <button className="flex-none bg-gray-dark text-white p-3">
            View all Transactions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
