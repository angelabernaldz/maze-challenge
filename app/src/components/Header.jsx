import LogOutButton from './LogOutButton.jsx'


function Header({ onUserLoggedOut }) {
    return (
        <header className="sticky top-0 shadow-md w-screen p-4 flex justify-end items-center">
            
            <div className="ml-auto">
                <LogOutButton onUserLoggedOut={onUserLoggedOut}/>
            </div>
        </header>
    )
}

export default Header