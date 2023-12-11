function User(name, surname, friends, isLoggedIn) {

    return ( 
        <>
            <h1>{isLoggedIn ? `Benim adım ${name} soyadım ${surname}` : `Giriş yapınız.` }</h1>


            {
                friends.map((friends, index) => 
                <div>{index} -{friends}  </div> ) 
            }

        </>
        
     );
}

export default User;