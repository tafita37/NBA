import { IonButton, IonCol, IonGrid, IonRow } from "@ionic/react";
import { useState, useEffect } from "react";
import { Redirect, useHistory, useParams } from "react-router";
import WebService from "../helper/WebService";
import "./../assets/css/ListeEquipe.css"

function ListeEquipe() {
    const history = useHistory();

    // const [jante, setJante] = useState<string>('');
    // const params = useParams<{ idJante: string }>();

    // // Utilisation de useEffect pour charger les données lors du montage du composant
    // useEffect(() => {
    //     const fetchVoiture = async () => {
    //     try {
    //         // Appel à WebService.getData pour récupérer les données
    //         const data = await WebService.getData("http://localhost:8080/detailJante?idJante="+params.idJante);
    //         // Conversion des données en JSON
    //         const jsonData = JSON.stringify(data);
    //         // console.log(jsonData);
            
    //         // Mise à jour de l'état 'voiture' avec les données JSON
    //         setJante(jsonData);
    //     } catch (error) {
    //         console.error("Erreur lors de la récupération des données :", error);
    //         // Gérer l'erreur ici
    //     }
    //     };

    //     // Appel de la fonction pour charger les données
    //     fetchVoiture();
    // }, []); // Le tableau de dépendances vide garantit que cette requête est effectuée une seule fois à la création du composant

    // // Convertir la chaîne JSON en tableau d'objets JSON
    // const jantes = jante ? JSON.parse(jante) : {};
    // console.log(jantes);

    const handleClick = () => {
        // Utilisation de history.push pour naviguer vers une autre page
        history.push(`statEquipe/${1}`);
    };
    return(
        <div>
            <IonGrid fixed={true}>
                <IonRow className="header">
                    <IonCol>Numero d'equipe</IonCol>
                    <IonCol>Equipe</IonCol>
                </IonRow>
                <IonRow className="tsotra" onClick={() => handleClick()}>
                    <IonCol>EQUIPE001</IonCol>
                    <IonCol>Cleveland</IonCol>
                </IonRow>
            </IonGrid>
        </div>
    )
}
export default ListeEquipe;