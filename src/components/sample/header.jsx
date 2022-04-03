import Plank from '../../images/plank.jpg';

export const Header = () => {
  const imgStyle = {
    transition: '2s',
    opacity: 1,
    position: 'relative',
  }

  const titleStyle = {
    position: 'absolute',
    top: '20%',
    fontSize: '200px',
    color: 'rgba(237, 229, 240, 0.831)',
    backgroundColor: 'rgba(54, 59, 59, 0.351)',
  }

  return (
    <div style={imgStyle}>
      <img src={Plank} alt="plank" width="100%" />
      <p style={titleStyle}>2TheNextStage</p>
    </div>
  );
}