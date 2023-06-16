const Main = ({ aside, children }) => {
  return (
      <main>
        {aside && aside("soy un aside")}
        {children}
      </main>
    );
  };
  
  export default Main;