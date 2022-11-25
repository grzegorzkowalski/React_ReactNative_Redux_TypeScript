type SecretType = {
    password: string,
    correctPassword : string,
    secret: string
}

const SecretStuff = ({password, correctPassword, secret} : SecretType) => {
   if (password === correctPassword) {
       return <h1>{secret}</h1>;
   }
   return null;
};

export default SecretStuff;
