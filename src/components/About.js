import "../App.css";
function About() {
  return (
    <>
      <div className="about">
        <div className="about-content">
          <h1 className="about-caption">
            We are changing the way student connect
          </h1>
          <p className="about-text">
            You may click to consent to our and our partne rocessing as
            described above. Alternatively you may access more detailed
            information and change your preferences before consenting or to
            refuse consenting. Please note that some processing of your personal
            data may not require your consent, but you have a right to object to
            such processing.{" "}
          </p>
        </div>

        <div className="about-images">
          <h1 className="about-caption">Developers Gallery</h1>
          <div className="colum">
            <img src="../images/val.jpeg" alt="ndi" />
            <img src="../images/neris.jpg" alt="ndi" height="100px" />
            <img src="../images/ranson.jpg" alt="ndi" />

            <img src="../images/ndi.jpg" alt="ndi" />
            <img src="../images/norman.jpeg" alt="ndi" />
            <img src="../images/val.jpeg" alt="ndi" />
          </div>
        </div>
      </div>
      <div className="users">
        <div className="user">
          <img className="user-img" src="../images/ndi.jpg" alt="ndi" />
          <p className="name">mbemgong godwill</p>
        </div>
        <div className="user">
          <img className="user-img" src="../images/ndi.jpg" alt="ndi" />
          <p className="name">mbemgong godwill</p>
        </div>
        <div className="user">
          <img className="user-img" src="../images/ndi.jpg" alt="ndi" />
          <p className="name">mbemgong godwill</p>
        </div>
        <div className="user">
          <img className="user-img" src="../images/ndi.jpg" alt="ndi" />
          <p className="name">mbemgong godwill</p>
        </div>
       </div>
    </>
  );
}
export default About;
