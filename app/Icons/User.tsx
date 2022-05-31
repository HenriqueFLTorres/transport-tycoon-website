import * as React from "react";

const User = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    style={{
      enableBackground: "new 0 0 24 24",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path
      d="M12 24c6.6 0 12-5.4 12-12S18.6 0 12 0 0 5.4 0 12s5.4 12 12 12zm3.6-14.4c0 2-1.6 3.6-3.6 3.6s-3.6-1.6-3.6-3.6S10 6 12 6s3.6 1.6 3.6 3.6zM4.8 18c1.6-2.2 4.3-3.6 7.2-3.6 2.9 0 5.6 1.4 7.2 3.6-1.6 2.2-4.3 3.6-7.2 3.6-2.9 0-5.6-1.4-7.2-3.6z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
    />
  </svg>
);

export default User;
