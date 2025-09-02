import LogOutButton from '../Buttons/LogOutButton.jsx'
import NavigationButton from '../Buttons/NavigationButton.jsx'


function Header({ onUserLoggedOut }) {
  return (
    <header className="sticky top-0 shadow-md w-screen p-4 flex justify-between items-center">
      {/* Botón de navegación a la izquierda */}
      <NavigationButton />

      {/* Logout a la derecha */}
      <div>
        <LogOutButton onUserLoggedOut={onUserLoggedOut} />
      </div>
    </header>
  );
}

export default Header