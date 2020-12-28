import React from 'react';
import {  Link } from 'react-router-dom';

const Page = () => {
  return (
    <>
      <div>Home Page</div>
      <Link to="/about">about</Link>
    </>
  );
}

export default Page;