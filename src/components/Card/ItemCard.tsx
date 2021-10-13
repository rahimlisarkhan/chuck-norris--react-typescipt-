import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ItemType } from '../../interface/home.module';
import { convertNormalDate } from '../../util/const-util';


interface ItemCardProps {
  item: ItemType
}

const ItemCard: React.FC<ItemCardProps> = ({ item: { created_at, icon_url, categories, value } }) => {

  const createAt = convertNormalDate(created_at)

  return (
    <Card sx={{ maxWidth: 285, m: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={icon_url}
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {createAt}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Joke : {categories.length > 0 ? categories[0] : 'random'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {value}
        </Typography>
      </CardContent>

    </Card>
  );
}

export default ItemCard