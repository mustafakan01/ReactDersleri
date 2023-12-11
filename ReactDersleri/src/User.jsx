function User({name, surname, friends, isLoggedIn}) {

    return ( 
        <>
            <h1>{isLoggedIn ? `Benim adım ${name} soyadım ${surname}` : `Giriş yapınız.` }</h1>


            {
                friends.map((friend, index) => (
                    <div key={index} >{index} -{friend}  </div> )

                ) 
                 
            }

        </>
        
     );
}

export default User;