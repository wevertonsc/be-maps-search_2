import { getPlaceAutocomplete } from './maps-api';

export async function getAutoCompleteDetails(address: string): Promise<any[]> {
    const apiKey = process.env.TOMTOM_API_KEY;

    const autocompleteResults = await getPlaceAutocomplete(apiKey, address);

    // Retornar os resultados mapeados
    return autocompleteResults.map((result: any) => ({
        placeId: result.placeId,
        streetNumber: result.streetNumber || null,
        countryCode: result.countryCode || null,
        country: result.country || null,
        freeformAddress: result.freeformAddress || null,
        municipality: result.municipality || null,
    }));
}
