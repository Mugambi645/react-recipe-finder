import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks, GiMeatCleaver } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <>
    <List></List>
    <div className="flex items-center -mx-4 space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-800 dark:text-gray-100">
	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-2  dark:border-gray-700 dark:text-gray-400">
  <SLink to={"/cuisines/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
  </a>
	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-2  dark:border-gray-700 dark:text-gray-400">

  <SLink to={"/cuisines/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
  </a>
	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-2  dark:border-violet-400 dark:text-gray-50">
  <SLink to={"/cuisines/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
  </a>
	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-2  dark:border-gray-700 dark:text-gray-400">
  <SLink to={"/cuisines/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
  </a>
  <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-2 dark:border-gray-700 dark:text-gray-400">
         
  <SLink to={"/cuisines/Chinese"}>
        <GiChopsticks />
        <h4>Chinese</h4>
      </SLink>
  </a>
  <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-2  dark:border-gray-700 dark:text-gray-400">

  <SLink to={"/cuisines/African"}>
        <GiMeatCleaver />
        <h4>African</h4>
      </SLink>
  </a>

</div>
<List></List>
    </>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  width: 6rem;
  height: 6rem;
  background: linear-gradient(35deg, #494949, #313131);
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: #fff;
    font-size: 0.8rem;
  }
  svg {
    color: #fff;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: #fff;
    }
    h4 {
      color: #fff;
    }
  }
`;
export default Category;
