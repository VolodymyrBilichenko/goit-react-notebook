// import { render } from 'react-dom';
import ReactDOM from "react-dom";
import user from './components/user.json';

const container = document.getElementById('root');

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





// ------------------

{/* <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/> */}




const data = user;

const profile = (
  <div className="description">
    <img
      src={data.avatar}
      alt={data.tag}
      className="avatar"
    />
    <p className="name">{ data.username }</p>
    <p className="tag">@{ data.tag }</p>
    <p className="location">{ data.location }</p>
  </div>
);

console.log(profile);

ReactDOM.render(profile, container);