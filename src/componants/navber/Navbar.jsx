import React from 'react';

const navigationData=[
  {
    "id": 1,
    "name": "Home",
    "path": "/home"
  },
  {
    "id": 2,
    "name": "About",
    "path": "/about"
  },
  {
    "id": 3,
    "name": "Services",
    "path": "/services"
  },
  {
    "id": 4,
    "name": "Contact",
    "path": "/contact"
  },
  {
    "id": 5,
    "name": "Blog",
    "path": "/blog"
  }
]
const Navbar = () => {
    return (
        <nav>
<ul>
    {
        navigationData.map(route=> <link key={route.id} route={route}></link>)
    }
</ul>

            {/* <ul className='flex'>
                {
                    navigationData.map(route=> <li className='mr-10'><a href="{route.path}">{route.name}</a></li>)
                }
            </ul> */}

            {/* <ul className='flex'>
                <li className='mr-10'><a href="">Home</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/Blog">Bolg</a></li>
            </ul> */}
        </nav>
    );
};

export default Navbar;