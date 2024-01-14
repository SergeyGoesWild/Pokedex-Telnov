

function NavBar({ pokemons, onPokemonClick }) {

    return (
        <div>
            {pokemons.map((pokemon) => (
                <button key={pokemon.name} onClick={() => {
                    onPokemonClick(pokemon)
                }}>
                    {pokemon.name}
                </button>
            ))}
        </div>
    );
};

export default NavBar