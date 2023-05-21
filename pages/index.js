import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navigation from '../components/Navigation/Navigation'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })


const {library} = require('@fortawesome/fontawesome-svg-core')
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faExternalLink, fas} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas, faTwitter, faGithub, faLinkedin, faInstagram, faEnvelope, faExternalLink)

export default function Home() {
  return (
    <div>
      <Navigation />
    </div>
  )
}
