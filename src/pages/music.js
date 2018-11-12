import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import P5Wrapper from 'react-p5-wrapper'
import p5 from 'p5';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';
import sketch from '../sketches/music'


const MusicPage = () => (
  <Layout>
    <h1>Hi this is the P5.js page</h1>
    <p>Welcome to p5 js react</p>
    <Link to="/">Go back to the homepage</Link>
    <P5Wrapper sketch={sketch}/>
  </Layout>
)

export default MusicPage
