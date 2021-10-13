import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import { Container, SelectList } from './CategorySelect.styled'
import { SubmitBtn } from '../../../components/SubmitButton/SubmitButton';


interface CategorySelectProps {
    categories?: string[]
    jokesData: (category: string) => void,
    disabled:boolean
}

const CategorySelect: React.FC<CategorySelectProps> = ({ categories, jokesData, disabled }) => {
    const [category, setCategory] = React.useState('');

    const handleChange = (event: any) => {
        setCategory(event.target.value);
    };


    return (
        <Container>
            <FormControl sx={{ width: 285 }}>
                <SelectList
                    id="demo-simple-select-autowidth"
                    onChange={handleChange}>
                    <option value={''}>random</option>
                    {categories && categories.map((category: string) => <option key={category} value={category}>{category}</option>)}
                </SelectList>
            </FormControl>
            <SubmitBtn  title={'Get Joke'} disabled={disabled} onSubmit={() => jokesData(category && category)} />
        </Container>
    );
}

export default CategorySelect