const Card = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-sm">
      <figure>
        <img
          src="src\assets\faviCon.jpeg"
          alt="Album"
          className="w-50 h-50 rounded-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Candidate Name</h2>
        <p>Some information, like whats his/her role in HEAP.</p>
        <div className="card-actions justify-end">
          {/* <button className="btn btn-primary">Listen</button> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
