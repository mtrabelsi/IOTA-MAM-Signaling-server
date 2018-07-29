
export default () =>
  <div>
    <h1>Welcome to MAM demo</h1>
    <p>
      if you want to run this demo please run the
      <a href="/pub">/pub</a> and <a href="/sub">/sub</a> in two different tabs.
    </p>
    <style jsx>{`
      @media (max-width: 600px) {
        div {
          background: blue;
        }
      }
    `}</style>
  </div>
