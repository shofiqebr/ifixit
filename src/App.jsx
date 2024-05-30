import {createContext} from "react";
import {Outlet, useLoaderData} from "react-router-dom";
import Navbar from "./sharred/navbar/Navbar";
import Footer from "./sharred/footer/Footer";

export const GroupsContext = createContext([]);
export const ItemContext = createContext([]);
export const RateContext = createContext([]);

const App = () => {
  const {groups, items, rate} = useLoaderData();

  return (
    <>
      <GroupsContext.Provider value={groups}>
        <ItemContext.Provider value={items}>
          <RateContext.Provider value={rate}>
            <Navbar />
            <Outlet></Outlet>
            <Footer />
          </RateContext.Provider>
        </ItemContext.Provider>
      </GroupsContext.Provider>
    </>
  );
};

export default App;
