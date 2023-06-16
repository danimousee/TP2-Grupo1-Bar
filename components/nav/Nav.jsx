import Anchor from "./Anchor";

const Nav = ({ link1, link2, link3 }) => {
  return (
    <nav>
      <Anchor name={link1}/>
      <Anchor name={link2}/>
      <Anchor name={link3}/>
    </nav>
  );
};

export default Nav;