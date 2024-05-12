import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import axios from 'axios';
import axiosInstance from '../helpers/api.call';

export const Analyse = () => {
    const [analyses, setAnalyses] = useState([]);
    const [username, setUsername] = useState("simo");
    const [visible, setVisible] = useState(false);
    const [nom, setNom] = useState('');
    const [lien, setLien] = useState('');
    const [langue, setLangue] = useState('Arabe');
    const [visibled, setVisibled] = useState(false);
    const [visibledd, setVisibledd] = useState(false);
    const [selectedAnalyse, setSelectedAnalyse] = useState(null);
    const afficheButton = (rowData) => {
        return (
            <Button label="Show" icon="pi pi-external-link" onClick={() => {
                setSelectedAnalyse(rowData);
                setVisibledd(true);
            }} />
        );
    };
    


    const fetchAnalyses = async () => {
        try {
            const response = await axiosInstance.get(`http://localhost:8282/api/patient/analyse/${username}`);
            setAnalyses(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des analyses :', error);
        }
    };
    console.log("hello");
    console.log(analyses);
    console.log(analyses);

    useEffect(() => {
        fetchAnalyses();
    }, [username]);

    const handleSubmit = async () => {
        try {
            const response = await axios.post(
                'https://api-d7b62b.stack.tryrelevance.com/latest/studios/0e56f82a-8c9b-440b-b62a-d005761f11ad/trigger_limited',
                {
                    params: {
                        file_url: lien,
                        options: langue
                    },
                    project: "c68a5aa9d903-49f5-950d-d25829e4cf7b"
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "c68a5aa9d903-49f5-950d-d25829e4cf7b:sk-ZDY1OTI4ODgtMDRiYi00MGVkLWE3OGYtMjI3YmRhM2U2MzNm"
                    }
                }
            );

            const { data } = response;
            
            
            await axiosInstance.post(`http://localhost:8282/api/patient/analyse/${username}`, { 
                name: nom,
                text: data.output.data
            });

            setVisible(false);
            fetchAnalyses(); // Met à jour la liste des analyses après l'ajout
        } catch (error) {
            console.log(error);
        }
    };

    const showDialog = () => {
        setVisible(true);
    };

    const hideDialog = () => {
        setVisible(false);
    };

    

    const dialogFooter = (
        <div>
            <Button label="Close" icon="pi pi-times" onClick={hideDialog} className="p-button-text" />
        </div>
    );

    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='flex m-5 '>
                    <i className="pi pi-file-o mr-2 text-[3.35rem]"></i>
                    <h1 className='text-[2.35rem] font-semibold'>Analyses</h1>
                </div >
                <Button className="text-white px-3 py-[.75rem] transition duration-200 ease-in-out mr-5" onClick={() => setVisibled(true)}>
                    Nouvelles analyses
                </Button>
                <Dialog visible={visibled} modal header="Nouvelles analyses" style={{ width: '30rem' }} onHide={() => setVisibled(false)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nom">
                            Nom :
                        </label>
                        <InputText
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="nom"
                            type="text"
                            placeholder="Nom"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lien">
                            Lien du document :
                        </label>
                        <InputText
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="lien"
                            type="text"
                            placeholder="Lien"
                            value={lien}
                            onChange={(e) => setLien(e.target.value)}
                        />
                    </div>
                    <div className="mb-4 mt-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
                            Langue d'explication :
                        </label>
                        <select
                            className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                            id="type"
                            value={langue}
                            onChange={(e) => setLangue(e.target.value)}
                        >
                            <option value="Arabe">Arabe</option>
                            <option value="Français">Français</option>
                            <option value="Anglais">Anglais</option>
                        </select>
                    </div>
                    <Button label="Envoyer" onClick={handleSubmit} autoFocus />
                </Dialog>
            </div>

            <div className="m-auto card w-1/2" >
                <DataTable value={analyses}  tableStyle={{ minWidth: '20rem', marginLeft: '0rem'}}>
                    <Column field="id" header="Id" style={{ width: '1%', textAlign:'center'}}></Column>
                    <Column field="name" header="Nom" style={{ width: '1%' }}></Column>
                    <Column header="Explication" body={afficheButton} style={{ width: '1%', paddingRight:'0px', textAlign:'center' }} />
                </DataTable>
            </div>

            <Dialog visible={visibledd} style={{ width: '50vw' }} onHide={() => setVisibledd(false)} header="Détails de l'analyse" modal>
    <div>
        {selectedAnalyse && (
            <div>
                <h3>Nom : {selectedAnalyse.text}</h3>
            </div>
        )}
    </div>
</Dialog>
        </div>
    );
};

export default Analyse;
