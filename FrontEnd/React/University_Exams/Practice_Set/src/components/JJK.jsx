export const JJK = ({ character }) => {
  const shortText = (text, length = 180) =>
    text && text.length > length ? text.slice(0, length) + "..." : text || "N/A";

  const status = (character.status || "Unknown").toLowerCase();

  return (
    <div className="card">
      <div className="image-wrap">
        <img
          src={character.image_url || "/placeholder.png"}
          alt={character.name}
          onError={(e) => (e.target.src = "/placeholder.png")}
        />

        <span className={`status ${status}`}>
          {character.status || "Unknown"}
        </span>
      </div>

      <div className="content">
        <h2>{character.name}</h2>

        <p className="meta">
          {character.grade || "Unranked"} · {character.species || "Unknown"}
        </p>

        <div className="stats">
          <span>🎂 {character.age?.[0] ?? "Unknown"}</span>
          <span>⚧ {character.gender ?? "Unknown"}</span>
        </div>

        <section>
          <h4>Abilities</h4>
          <p>{shortText(character.abilities)}</p>
        </section>

        <section>
          <h4>Personality</h4>
          <p>{shortText(character.personality)}</p>
        </section>
      </div>
    </div>
  );
};
