import React from 'react';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}><a href="#personal">Personal</a></li>
        <li style={styles.navItem}><a href="#education">Education</a></li>
        <li style={styles.navItem}><a href="#domain">Domain</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px 20px',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  navItem: {
    color: 'white',
  }
};

export default Navbar;
