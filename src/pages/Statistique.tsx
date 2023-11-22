// import { IonCol, IonGrid, IonRow } from "@ionic/react";
import { IonCol, IonGrid, IonRow } from "@ionic/react";
import { useParams } from "react-router";
import "./../assets/css/Statistique.css"

function Statistique() {
    const params = useParams<{ idEquipe: string }>();
    console.log(params.idEquipe);
    
    return(
        <div className="responsive-table">
            <IonGrid>
                <IonRow className="header-row header">
                    <IonCol size="2">Joueur</IonCol>
                    <IonCol size="2">Equipe</IonCol>
                    <IonCol size="1">M</IonCol>
                    <IonCol size="1">MJ</IonCol>
                    <IonCol size="1.3">PPM</IonCol>
                    <IonCol size="1">RPM</IonCol>
                    <IonCol size="1.7">PDPM</IonCol>
                    <IonCol size="1">3P</IonCol>
                    <IonCol size="1">LF</IonCol>
                </IonRow>
                <IonRow className="tsotra">
                    <IonCol size="2">Joueur1</IonCol>
                    <IonCol size="2">Cleveland1</IonCol>
                    <IonCol size="1">10</IonCol>
                    <IonCol size="1">8</IonCol>
                    <IonCol size="1.3">20</IonCol>
                    <IonCol size="1">10</IonCol>
                    <IonCol size="1.7">5</IonCol>
                    <IonCol size="1">22</IonCol>
                    <IonCol size="1">11</IonCol>
                </IonRow>
            </IonGrid>
        </div>
    )
}
export default Statistique;