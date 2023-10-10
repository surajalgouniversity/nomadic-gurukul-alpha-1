import Button from "./button.jsx";

export default function Header() {
    return (
        <header className="header">
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">A unique camp</span>
                    <span className="heading-primary--sub">crafted for techies in Hyderabad</span>
                </h1>
                <Button/>
            </div>
        </header>
    )
}