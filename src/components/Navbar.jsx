import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li><button>Profile</button></li>
        <li><button>Messages</button></li>
        <li><button>News</button></li>
        <li><button>Music</button></li>
        <li><button>Settings</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;