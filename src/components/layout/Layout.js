import { Fragment } from 'react';
import picture from '../../pic/picture.jpg'
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <div className={classes['main-image']}>
        <img src={picture} alt='Joni' />
      </div>
    </Fragment>
  );
};

export default Layout;
