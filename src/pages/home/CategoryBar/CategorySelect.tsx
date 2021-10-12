import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Container, SelectList } from './CategorySelect.styled'
import { SubmitButton } from '../HomeView/HomePage.styled';


interface CategorySelectProps {
    categories?: string[]
    jokesData: (category: string) => void

}

const CategorySelect: React.FC<CategorySelectProps> = ({ categories, jokesData }) => {
    const [category, setCategory] = React.useState('');

    const handleChange = (event: any) => {
        setCategory(event.target.value);
    };

    console.log(category);

    return (
        <Container>
            <FormControl sx={{ width: 185 }}>
                <InputLabel id="demo-simple-select-autowidth-label">{category ? "Category" : "Random"} </InputLabel>
                <SelectList
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={category}
                    onChange={handleChange}
                    // autoWidth
                    label="Category"
                >
                    <MenuItem value={''}>random</MenuItem>
                    {categories && categories.map((category: string) => <MenuItem key={category} value={category}>{category}</MenuItem>)}
                </SelectList>
            </FormControl>
            <SubmitButton onClick={() => jokesData(category && category)}  >Get Joke</SubmitButton>
        </Container>
    );
}

export default CategorySelect