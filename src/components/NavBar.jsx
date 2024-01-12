function NavBar(props) {
    let { funcPlus, funcMinus } = props
    return (
        <div>
            <button onClick={funcMinus} > Previous </button>
            <button onClick={funcPlus}> Next </button>
        </div>
    );
};

export default NavBar