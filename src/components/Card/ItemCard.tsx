import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { convertNormalDate } from '../../util/const-util';


interface ItemCardProps {
  item: any
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {

  const createAt = convertNormalDate(item.created_at)

  return (
    <Card sx={{ maxWidth: 285,m:2}}>
      <CardMedia
        component="img"
        height="140"
        image={item.icon_url}
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {createAt}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Joke : {item.categories.length > 0 ? item.categories[0] : 'random'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.value}
        </Typography>
      </CardContent>

    </Card>
  );
}

export default ItemCard