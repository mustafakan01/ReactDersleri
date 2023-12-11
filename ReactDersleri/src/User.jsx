function User(props) {
    console.log(props)
    return ( 
        <div>
            <h1>{props.isLoggedIn ? `Benim adım ${props.name} soyadım ${props.surname}` : `Giriş yapınız.` }</h1>
        </div>
     );
}

export default User;