import React from 'react';

function SignUp(props) {
    return (
        <div className="container m-auto mt-5">
            <h1 className="text-center">Ruyhatdan utish</h1>
            <form>
                <div className="mb-3">
                    <label for="name" className="form-label">Isminigz</label>
                    <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Emailingiz</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Parolingiz</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default SignUp;