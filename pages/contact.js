import Layout from "../components/MyLayout";

export default () => (
  <div>
    <Layout>
      <input placeholder='Your Name'/>
      <p>
        <h3>
          <a href='mailto:ryandrachenberg@gmail.com'>Contact me!</a>
        </h3>
      </p>
      <style jsx global>{`
        body {
          font-family: 'Benton Sans', 'Helvetica Neue';
          margin: 2em;
        }
        h2 {
          font-style: italic;
          color: #000000;
        }
      `}</style>
    </Layout>
  </div>
)