

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value; 
        const password = e.target.password.value; 
        console.log(email, password)
        
    }

    return (
        <div>
            <h3 className="text-3xl">Please register</h3>
            <form onSubmit={handleRegister} className="mt-2 w-1/2 mx-auto bg-slate-100">
                <input className="bg-slate-200 p-1 border-gray-500 border-2 rounded-sm" type="email" name="email" id="" />
                <br />
                <input className="bg-slate-200 p-1 rounded-sm mt-1 border-2 border-gray-500" type="password" name="password" id="" />
                <br />
                <input className="mt-2 bg-slate-400 rounded-sm p-1 text-white" type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Register;