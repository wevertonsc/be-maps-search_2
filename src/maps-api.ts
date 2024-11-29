import axios from 'axios';

// https://developer.tomtom.com/search-api/documentation/search-service/fuzzy-search
export async function getPlaceAutocomplete(key: string, address: string) {
    const autocomplete = await axios.get(`https://api.tomtom.com/search/2/search/${encodeURIComponent(address)}.json`, {
        params: {
            key,
            countryCode: 'AU',
            typeahead: true,
            language: 'en-AU',
            limit: 100,
        }
    });

    return autocomplete.data.results.map((result: any) => {
        const address = result.address || {};
        return {
            placeId: result.id,
            streetNumber: address.streetNumber || null,
            countryCode: address.countryCode || null,
            country: address.country || null,
            freeformAddress: address.freeformAddress || null,
            municipality: address.municipality || null,
        }
    })
}