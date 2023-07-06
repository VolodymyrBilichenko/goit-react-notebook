import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode basename = "/goit-react-hw-01-components">
    <App />
  </React.StrictMode>
);


// import { App } from './components/App';
// import { render } from 'react-dom';
// // import ReactDOM from "react-dom";

// const container = document.getElementById('root');



// Вступ --------------------

// const elem1 = React.createElement('span', { children: 'Hello' });
// const elem2 = React.createElement('span', { children: 'world' });


// const elements = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: [elem1, ' ', elem2],
// });

// console.log(elements);

// render(elements, container);


// JSX -------------------------


// const elem1 = <span>Hello</span>
// const elem2 = <span>world</span>

// const elements = React.createElement('div', {
// a: 5,
// b: 10,
// children: 'Hello world',
// });

// const jsxElements = <div>
//   {elem1}
//   {elem2}
// </div>

// console.log(jsxElements);

// ReactDOM.render(jsxElements, container);





// Рендер через jsx розмітку ------------------




// const desc = (
  // <div className="description">
  //   <img
  //     src={user.avatar}
  //     alt={user.tag}
  //     className="avatar"
  //   />
  //   <p className="name">{ user.username }</p>
  //   <p className="tag">@{ user.tag }</p>
  //   <p className="location">{ user.location }</p>
  // </div>
// );

// console.log(desc);

// const stats = (
//   <ul className="stats">
//     <li>
//       <span className="label">Followers</span>
//       <span className="quantity">{ user.stats.followers }</span>
//     </li>
//     <li>
//       <span className="label">Views</span>
//       <span className="quantity">{ user.stats.views }</span>
//     </li>
//     <li>
//       <span className="label">Likes</span>
//       <span className="quantity">{ user.stats.likes }likes</span>
//     </li>
//   </ul>
// );

// console.log(stats);


// const profile = (
//   <div className="profile">
//     {desc}
//     {stats}
//   </div>
// );

// ReactDOM.render(profile, container);





// Приклад використання компонентів ------------------

// function Profile(props) {
//   const { username, tag, location, avatar, stats } = props;

//   console.log(props);

//   return <div className="description">
//     <img
//       src={avatar}
//       alt={tag}
//       className="avatar"
//     />
//     <p className="name">{ username }</p>
//     <p className="tag">@{ tag }</p>
//     <p className="location">{ location }</p>
//   </div>
// };

// render( <App />, container );