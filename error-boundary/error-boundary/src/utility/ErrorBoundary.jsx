// import React, { Component } from "react";
// import Error from "../components/Error";

// export default class ErrorBoundary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       errorInfo:null
//     };
//   }

//   static getDerivedStateFromError(error) {
//     return { error: error };
//   }

//   componentDidCatch(error, errorInfo) {
//     logErrorToMyService(error, errorInfo);
//   }
//   render() {
//     if (this.state.error) {
//       return <div><Error/> </div>;
//     }
//     return this.props.children;
//   }
// }

import React, { useState } from "react";
import Error from "../components/Error";

const ErrorBoundary = ({ children }) => {
  const [error, setError] = useState(null);

  const logErrorToMyService = (error, errorInfo) => {
    
    console.error("Logged error: ", error, errorInfo);
  };

  const handleError = (error, errorInfo) => {
    logErrorToMyService(error, errorInfo);
    setError(error);
  };

  
  React.useEffect(() => {
    const handleGlobalError = (event) => {
      handleError(event.error);
    };

    window.addEventListener("error", handleGlobalError);

    return () => {
      window.removeEventListener("error", handleGlobalError);
    };
  }, []);

  if (error) {
    return <div><Error /></div>;
  }

  return children;
};

export default ErrorBoundary;
