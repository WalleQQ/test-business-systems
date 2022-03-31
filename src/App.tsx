import React from 'react';
import { Bloggers } from './components/blocks/bloggers/Bloggers';
import { PageWrapper } from './components/layout/page-wrapper/PageWrapper';
import './globalCss.css';

function App() {
  return (
    <div className='App'>
      <PageWrapper>
        <Bloggers />
      </PageWrapper>
    </div>
  );
}

export default App;
