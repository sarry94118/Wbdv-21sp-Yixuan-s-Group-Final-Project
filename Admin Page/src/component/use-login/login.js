import React, {useEffect} from "react";

const Login = ()=>{

    useEffect(() => {
        window.location.href = "https://petfinderlogin.herokuapp.com/login";
    }, []);

    return <div>
        <h4>Log in</h4>
    </div>
}

export default Login;