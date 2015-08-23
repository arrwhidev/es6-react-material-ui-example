import React from 'react';
import Layout from './components/Layout.js';

const APP = document.getElementById('app-main');

if(APP) React.render(<Layout/>, APP);
