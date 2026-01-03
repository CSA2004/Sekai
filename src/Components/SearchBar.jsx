import React from 'react';
import { TextField, Select, MenuItem, InputLabel, FormControl, Box } from '@mui/material';

const SearchBar = ({ filters, setFilters }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    return (
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
            {/* 1. Location Search (TextField) */}
            <TextField
                label="Search Location"
                name="searchTerm"
                variant="outlined"
                size="small"
                value={filters.searchTerm}
                onChange={handleChange}
            />

            {/* 2. Property Type (MUI Select) */}
            <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel>Type</InputLabel>
                <Select
                    name="type"
                    value={filters.type}
                    label="Type"
                    onChange={handleChange}
                >
                    <MenuItem value="any">Any Type</MenuItem>
                    <MenuItem value="House">House</MenuItem>
                    <MenuItem value="Flat">Flat</MenuItem>
                    <MenuItem value="Bungalow">Bungalow</MenuItem>
                    <MenuItem value="Penthouse">Penthouse</MenuItem>
                    <MenuItem value="Detached">Detached</MenuItem>
                </Select>
            </FormControl>

            {/* 3. Price Range (TextField) */}
            <TextField
                label="Min Price"
                name="minPrice"
                type="number"
                size="small"
                onChange={handleChange}
            />
            <TextField
                label="Max Price"
                name="maxPrice"
                type="number"
                size="small"
                onChange={handleChange}
            />

            {/* 4. Date Added (MUI Date Input) */}
            <TextField
                label="Added After"
                name="startDate"
                type="date"
                size="small"
                InputLabelProps={{ shrink: true }}
                onChange={handleChange}
            />

            {/* 5. Postcode (textField) */}
            <TextField
                label="Postcode Area (e.g. BR1)"
                name="postcode"
                variant="outlined"
                size="small"
                value={filters.postcode}
                onChange={handleChange}
            />
        </Box>
    );
};

export default SearchBar;