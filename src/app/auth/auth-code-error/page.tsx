export default function AuthCodeError() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-500">
          Erreur d'authentification
        </h1>
        <p>Impossible de terminer la connexion. Veuillez réessayer.</p>
      </div>
    </div>
  );
}
