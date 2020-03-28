const App = ({ children }) => {
  return (
    <main>
      <div className="">
        <h1>Welcome to NextJS with Redux</h1>
      </div>
      <style jsx global>{`
        * {
          font-family: monospace, serif;
        }
        body {
          margin: 0;
          padding: 25px 50px;
        }
      `}</style>
    </main>
  );
};

export default App;
