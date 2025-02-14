import Polaroid from './Polaroid';
import { Polaroids } from '../polaroids';

const Background = () => {
  const polaroids = Polaroids.map((picture, index) => (
    <Polaroid
      key={`polariod-${index}`}
      id={index}
      src={picture.img}
      top={picture.top}
      left={picture.left}
      index={picture.index}
      rotate={picture.rotate}
    >
      {picture.caption}
    </Polaroid>
  ));
  return <div>{polaroids}</div>;
};

export default Background;
