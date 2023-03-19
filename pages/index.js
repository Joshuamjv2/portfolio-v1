import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas, faTwitter, faGithub, faLinkedin, faInstagram, faEnvelope)

export default function Home() {
  return (
    <div>
      <Navigation />
    </div>
  )
}
