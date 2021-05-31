import React from "react";
import { Redirect } from "react-router-dom";

const withAuth = (Component: any) => {
    const AuthRoute = () => {
        const isAuth = !!localStorage.getItem("token");
        if (isAuth) {
            return <Component />;
        } else {
            return <Redirect to="/login" />;
        }
    };

    return AuthRoute;
};

export default withAuth;