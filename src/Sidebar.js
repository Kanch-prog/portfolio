import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="left-icons">
          <a href="https://github.com/Kanch-prog"><img src="images/github.png" alt="GitHub" /></a>
          <a href="https://codesandbox.io/dashboard/recent?workspace=468721d1-66c7-43cc-ac48-3b0efe069979"><img src="images/codepen.png" alt="CodePen" /></a>
          <a href="https://linkedin.com/in/kanchana-karunarathna-308844b2"><img src="images/linkedin.png" alt="LinkedIn" /></a>
        </div>
        <div className="right-info">
          <p><a href="mailto:kanchana.karunarathna15@gmail.com">Email: kanchana.karunarathna15@gmail.com</a></p>
        </div>       
    </div>
  );
}

export default Sidebar;
