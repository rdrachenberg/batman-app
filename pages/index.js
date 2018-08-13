import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
    <Layout>
    <img src="/static/batman.gif" alt="spray image" className='batman-image' />
    <ul>
        {props.shows.map(({show}) => (
            <li key={show.id}>
                <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                <a>{show.name}</a>
                </Link>
            </li>
        ))}
    </ul>
    <style jsx>{`
        .batman-image {
            display: block;
            margin-left: 0px;
            margin-right: auto;
            max-width: 35%;
        }`
    }
    </style>
    </Layout>
)

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`)


    return {
        shows: data
    }
}

export default Index