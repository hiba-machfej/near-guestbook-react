import { wallet, CONTRACT_ID } from '../services/near';

const Navbar = () => {
  const accountId = wallet.getAccountId();
  const signIn = () => {
    if (accountId) {
      wallet.signOut();
      window.location.reload();
    } else {
      wallet.requestSignIn(CONTRACT_ID);
    }
  };
  return (
    <div className="flex justify-center m-6">
      {accountId ? (
        <div  className="flex justify-center m-6">
          <p className="mr-10">Welcome {accountId}</p> 
          <button onClick={signIn}>Log out</button>
        </div>
      ) : (
        <button onClick={signIn}>Connect to NEAR</button>
      )}
    </div>
  );
};

export default Navbar;
