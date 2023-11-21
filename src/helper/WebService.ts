import axios from "axios";

class WebService {
    async getData(urlWeb : string) : Promise<any> {
        try {
            const response=await axios.get(urlWeb);
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des données :', error);
            throw error;
        }
    }
}

export default new WebService();