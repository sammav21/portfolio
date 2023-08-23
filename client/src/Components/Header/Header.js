export default function Header(props){

    const handleScroll = (ref) => {
        window.scrollTo({
          top: ref.offsetTop,
          left: 0,
          behavior: "smooth",
        });
      };
      
    return(
    <header>
        <div className="logo">
            <p>Samuel Avilés</p>
        </div>
        <nav>
            <a onClick={() => {handleScroll(props.experiencesRef.current)}}>experiences</a>
            <a onClick={() => {handleScroll(props.projectsRef.current)}}>projects</a>
            <a onClick={() => {handleScroll(props.aboutRef.current)}}>about</a>
        </nav>
    </header>
    )
}