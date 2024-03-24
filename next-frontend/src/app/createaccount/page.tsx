import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";

const CreateAccountPage = () => {
    return (
        <div className="container signup">
            <div className="header">
                <div className="medicate">Medicate</div>
                <div className="text">Create an Account</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <Image
                        src="/icons/user.png"
                        width={22}
                        height={22}
                        alt="user"
                    />
                    <input type="text" placeholder="Name" />
                </div>
                <div className="input">
                    <Image
                        src="/icons/test.png"
                        width={22}
                        height={22}
                        alt="calendar"
                    />
                    <input type="date" />
                </div>
                <div className="input">
                    <Image
                        src="/icons/email.png"
                        width={22}
                        height={22}
                        alt="email"
                    />
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                    <Image
                        src="/icons/password.png"
                        width={19}
                        height={22}
                        alt="password"
                    />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            <div className="submit-container">
                <Link key="backButton" href="/">
                    <div className="submit gray">Back</div>
                </Link>
                <Link key="createAccountButton" href="/account">
                    <div className="submit">Create Account</div>
                </Link>
            </div>
        </div>
    );
};

export default CreateAccountPage;
