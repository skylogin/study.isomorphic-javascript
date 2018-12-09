import React from "react";

const path = "/500";
const action = () => <InternalError />;

function NotFound() {
  return (
    <div>
      <h1>Server Internal Error</h1>
      <p>Sorry, We can fix it.</p>
    </div>
  );
}

export default { path, action };
