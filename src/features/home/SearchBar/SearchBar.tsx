import React from 'react'
import { TextField } from '@material-ui/core'
import FormControl from '@mui/material/FormControl';
import { Container } from './SearchBar.styled';
import { SubmitBtn } from '../../../components/SubmitButton/SubmitButton';

interface SearchBarProps {
    searchQuery: (query: string) => void
    errorMessage: string
    disabled:boolean

}
const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, errorMessage, disabled }) => {

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
            <SubmitBtn  title={'Search'} disabled={disabled} onSubmit={() => searchQuery(queryWord)} />

        </Container>
    )
}

export default SearchBar