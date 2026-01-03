import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Tabs, Tab, Box, Typography, Paper } from '@mui/material';

const PropertyDetails = () => {
    const { id } = useParams(); // Gets property ID from HashRouter URL
    const [property, setProperty] = useState(null);
    const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        // Fetching from the public folder as a static asset
        fetch('./properties.json')
            .then((response) => response.json())
            .then((data) => {
                const found = data.properties.find((p) => p.id === id);
                setProperty(found);
            })
            .catch((err) => console.error("Error loading property data:", err));
    }, [id]);

    if (!property) return <div className="loading-state">Loading property details...</div>;

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    return (
        <div className="property-details-container">
            <nav className="details-navigation">
                <Link to="/" className="back-link">← Back to Search</Link>
            </nav>

            <header className="property-details-header">
                <h1 className="property-title">{property.location}</h1>
                <p className="property-price">£{property.price.toLocaleString()}</p>
            </header>

            {/* Gallery Requirement: 6-8 images */}
            <section className="property-image-gallery">
                <div className="main-image-wrapper">
                    <img src={property.picture} alt="Primary View" className="gallery-main-img" />
                </div>

                <div className="thumbnail-grid">
                    {/* This maps through the new images array you added to your JSON */}
                    {property.images && property.images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Property view ${index + 1}`}
                            className="gallery-thumb"
                        />
                    ))}
                </div>
            </section>

            {/* React Tabs Section */}
            <Box className="tabs-wrapper">
                <Tabs value={tabIndex} onChange={handleTabChange} className="details-tabs">
                    <Tab label="Description" className="detail-tab" />
                    <Tab label="Floor Plan" className="detail-tab" />
                    <Tab label="Map" className="detail-tab" />
                </Tabs>

                <Paper className="tab-content-panel">
                    {tabIndex === 0 && (
                        <article className="description-section">
                            <Typography variant="h6">Property Description</Typography>
                            <p className="description-text">{property.description}</p>
                        </article>
                    )}

                    {tabIndex === 1 && (
                        <figure className="floorplan-section">
                            <Typography variant="h6">Floor Plan</Typography>
                            <img src="/images/floorplan.png" alt="Property Floor Plan" className="floorplan-img" />
                        </figure>
                    )}

                    {tabIndex === 2 && (
                        <section className="map-section">
                            <Typography variant="h6">Location</Typography>
                            <div className="map-responsive-container">
                                <iframe
                                    title="Property Location Map"
                                    className="google-map-iframe"
                                    src={`https://maps.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`}
                                ></iframe>
                            </div>
                        </section>
                    )}
                </Paper>
            </Box>
        </div>
    );
};

export default PropertyDetails;