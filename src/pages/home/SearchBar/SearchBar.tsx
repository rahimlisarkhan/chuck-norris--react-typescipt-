import React from 'react'
import { TextField } from '@material-ui/core'
import FormControl from '@mui/material/FormControl';
import { Container } from './SearchBar.styled';
import { SubmitButton } from '../HomeView/HomePage.styled';

interface SearchBarProps {
    searchQuery: (query: string) => void
    errorMessage: string

}
const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, errorMessage }) => {

    const [queryWord, setQueryWord] = React.useState('');

    const handleChange = (event: any) => {
        setQueryWord(event.target.value);
    };

    return (
        <Container>
            <FormControl sx={{ m: 2, width: 285 }}>
                <TextField
                    error={errorMessage ? true : false}
                    id="outlined-error-helper-text"
                    label={errorMessage ? "Error" : "Search"}
                    helperText={errorMessage && errorMessage}
                    onChange={handleChange}
                />
            </FormControl>
            <SubmitButton onClick={() => searchQuery(queryWord)}  >Search</SubmitButton>
        </Container>
    )
}

export default SearchBar