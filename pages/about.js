import Header from "../components/Header"
import Layouts from "../components/MyLayout"

export default () =>(
    <div>
        <Layouts>
            <div>
                < h4 > This is a simple React and Next.js website that pulls data from TVmaze.com API </h4>
                < h5 > Technologies used </h5>
                <div className='tech-images'>
                    <ul className='tech-list'>
                        <li>Node.js</li>
                        <li> React </li>
                        <li>Next.js</li>
                        <li>Express</li>
                    </ul>
                    < img className='node-js' src='https://www.valuecoders.com/blog/wp-content/uploads/2018/05/featured.jpg' />
                    < img className ='react-js' src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/4445319/original/58b332866815381e7c758143f8bc8ece0de96edd/create-reusable-react-js-components.png' />
                    < img className ='next-js' src='https://cdn-images-1.medium.com/max/1600/1*CwR-D3C1x5MwD4bT0yJ4RA.png' />
                    < img className ='express-js' src='https://amandeepmittal.gallerycdn.vsassets.io/extensions/amandeepmittal/expressjs/2.0.0/1509881293872/Microsoft.VisualStudio.Services.Icons.Default' />
                </div>
            </ div>
        </Layouts>
    </div>
)