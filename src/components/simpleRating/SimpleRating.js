import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';

const StyledRating = withStyles({
  iconEmpty:{
  color: '#C4C4C4',
  },
  iconFilled: {
    color: '#1C62CD', 
  },
  iconHover: {
    color: '#1C62CD',
  },
})(Rating);

export default function CustomizedRatings() {
  return (
    <div>
      <StyledRating
          name="customized-empty"
          defaultValue={4}
          precision={0.5}
          size = "large"
        />

    </div>
  );
}


